import records from "./records.json";

export type TistoryArchiveType = "프로필" | "게재" | "수상" | "입주" | "증명" | "인터뷰" | "지원";

export type TistoryArchiveEntry = {
  id: number;
  slug: string;
  title: string;
  originalTitle: string;
  date: string;
  sourceUrl: string;
  type: TistoryArchiveType;
  summary: string;
  body: string[];
  images: Array<{ src: string; originalSrc: string; alt: string; width?: number; height?: number }>;
  links: Array<{ href: string; label: string }>;
};

export const tistoryArchive = records as TistoryArchiveEntry[];

export const recentTistoryArchive = tistoryArchive.slice(0, 6);
