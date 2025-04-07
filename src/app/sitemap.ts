import type { MetadataRoute } from 'next';
import type {
  Folder,
  MdxFile,
  Meta,
  MetaJsonFile,
  PageMapItem
} from 'nextra';
import { getPageMap } from 'nextra/page-map';

export const dynamic = 'force-static';

interface PageType {
  title: string,
  type?: 'page',
  display?: 'hidden' | 'normal' | string
}

interface SitemapEntry {
  url: string,
  lastModified: string
}

export function isPageType(value: unknown): value is PageType {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  if ('title' in candidate) {
    return !('type' in candidate) || candidate.type !== 'page';
  }

  return false;
}

function isMetaJSONFile(value: unknown): value is MetaJsonFile {
  return typeof value === 'object' && value !== null && 'data' in value;
}

function isFolder(value: unknown): value is Folder {
  return typeof value === 'object'
    && value !== null
    && 'name' in value
    // && 'route' in value
    && 'children' in value;
}

function isMDXFile(value: unknown): value is MdxFile {
  return typeof value === 'object'
    && value !== null
    && 'name' in value
    // && 'route' in value
    && 'frontMatter' in value;
}

function isNotHiddenEntries([_, value]: [string, Meta]): boolean {
  if (!isPageType(value)) {
    return true;
  }
  return value.display !== 'hidden';
}

function toSitemapEntry(pageMapEntry: PageMapItem): SitemapEntry[] {
  if (isFolder(pageMapEntry)) {
    return parsePageMapItems(pageMapEntry.children);
  }
  if (isMDXFile(pageMapEntry)) {
    const { frontMatter, route } = pageMapEntry;

    return [{
      url: route,
      lastModified: frontMatter?.timestamp ? new Date(frontMatter.timestamp).toISOString() : new Date().toISOString()
    }];
  }

  return [];
}

function parsePageMapItems(items: PageMapItem[]): SitemapEntry[] {
  const metadata = Object.entries(items.find((item) => isMetaJSONFile(item))?.data ?? []);

  return metadata
    .reduce<PageMapItem[]>((acc, item) => {
      if (isNotHiddenEntries(item)) {
        const key = item[0];
        const result = items.find(
          (item) => 'name' in item && item.name === key
        );

        if (result) {
          acc.push(result);
        }
      }

      return acc;
    }, [])
    .flatMap(pageMapEntry => toSitemapEntry(pageMapEntry));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://docs.cloudpilot.ai';
  const pageMap = await getPageMap();

  return parsePageMapItems(pageMap).map((entry) => ({
    url: new URL(entry.url, baseUrl).toString(),
    lastModified: entry.lastModified
  }));
}
