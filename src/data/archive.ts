import { tistoryArchive } from "./tistoryArchive";

export type ArchiveItem = {
  date: string;
  title: string;
  type: string;
  description: string;
  href?: string;
};

export const archiveItems: ArchiveItem[] = tistoryArchive.map((item) => ({
  date: item.date.slice(0, 7),
  title: item.title,
  type: item.type,
  description: item.summary,
  href: `/works/${item.slug}/`,
}));
