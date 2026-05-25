import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const POST_DIR = "/private/tmp/kimwonho-posts";
const OUT_DATA = "src/data/tistoryArchive.ts";
const OUT_MANIFEST = "/private/tmp/kimwonho-image-downloads.json";

const postOrder = [
  39, 38, 37, 35, 34, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 18, 19, 20, 21, 22, 24, 25, 26, 32, 30, 33, 29, 28,
];

const htmlEntities = new Map([
  ["nbsp", " "],
  ["amp", "&"],
  ["lt", "<"],
  ["gt", ">"],
  ["quot", '"'],
  ["#39", "'"],
  ["lsquo", "‘"],
  ["rsquo", "’"],
  ["ldquo", "“"],
  ["rdquo", "”"],
  ["middot", "·"],
]);

function decodeHtml(value = "") {
  return value.replace(/&([^;]+);/g, (_, entity) => {
    if (htmlEntities.has(entity)) return htmlEntities.get(entity);
    if (entity.startsWith("#x")) return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    if (entity.startsWith("#")) return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    return `&${entity};`;
  });
}

function stripTags(value = "") {
  return decodeHtml(
    value
      .replace(/<br\s*\/?\s*>/gi, "\n")
      .replace(/<\/(p|div|figure|h\d|li)>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\u200b/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function titleFromHtml(html) {
  return decodeHtml(
    (html.match(/<strong class="title_post">([\s\S]*?)<\/strong>/) ||
      html.match(/<meta property="og:title" content="([^"]*)"/) || ["", ""])[1]
  ).trim();
}

function dateFromHtml(html) {
  return (html.match(/<meta property="article:published_time" content="([^"]*)"/) || ["", ""])[1];
}

function contentFromHtml(html) {
  return (
    html.match(/<div class="[^"]*contents_style[^"]*">([\s\S]*?)\n\s*<div class="container_postbtn/) ||
    ["", ""]
  )[1];
}

function slugify(title, id) {
  const cleaned = title
    .replace(/[《》]/g, "")
    .replace(/&/g, "and")
    .replace(/[^0-9A-Za-z가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return `${id}-${cleaned}`;
}

function classify(title) {
  if (title.includes("포트폴리오")) return "프로필";
  if (title.includes("인터뷰")) return "인터뷰";
  if (title.includes("입주작가") || title.includes("창작실")) return "입주";
  if (title.includes("예술활동증명")) return "증명";
  if (title.includes("지원사업")) return "지원";
  if (title.includes("문학상") || title.includes("공모전")) return "수상";
  return "게재";
}

function cleanTitle(title) {
  return title.replace(/^《/, "").replace(/》$/, "").replace(/》\s*/, " ");
}

function imageExtension(url) {
  const clean = url.split("?")[0];
  const ext = extname(clean).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)) return ext;
  return ".jpg";
}

function uniqueBy(items, key) {
  const seen = new Set();
  return items.filter((item) => {
    const value = key(item);
    if (!value || seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

function paragraphize(text) {
  const lines = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^https?:\/\//.test(line))
    .filter((line) => !/^[\w.-]+\.[A-Za-z]{2,}$/.test(line));

  return uniqueBy(lines, (line) => line).slice(0, 18);
}

const files = new Set(await readdir(POST_DIR));
const imageDownloads = [];
const entries = [];

for (const id of postOrder) {
  const file = `${id}.html`;
  if (!files.has(file)) continue;

  const html = await readFile(join(POST_DIR, file), "utf8");
  const title = titleFromHtml(html);
  const content = contentFromHtml(html);
  const slug = slugify(title, id);
  const imageMatches = [...content.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)];
  const images = uniqueBy(
    imageMatches.map((match, index) => {
      const tag = match[0];
      const url = decodeHtml(match[1]);
      const ext = imageExtension(url);
      const local = `/assets/tistory/${id}-${index + 1}${ext}`;
      imageDownloads.push({ url, file: `public${local}` });
      return {
        src: local,
        originalSrc: url,
        alt: cleanTitle(title),
        width: Number((tag.match(/width="(\d+)"/) || ["", ""])[1]) || undefined,
        height: Number((tag.match(/height="(\d+)"/) || ["", ""])[1]) || undefined,
      };
    }),
    (image) => image.originalSrc
  );

  const links = uniqueBy(
    [...content.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((match) => {
      const href = decodeHtml(match[1]).replace(/&amp;/g, "&");
      const label = stripTags(match[2]).replace(/\n+/g, " ").trim() || href;
      return { href, label };
    }),
    (link) => link.href
  ).filter((link) => !link.href.startsWith("#"));

  const bodyText = stripTags(content);

  entries.push({
    id,
    slug,
    title: cleanTitle(title),
    originalTitle: title,
    date: dateFromHtml(html),
    sourceUrl: `https://kimwonho.tistory.com/${id}`,
    type: classify(title),
    summary:
      paragraphize(bodyText)[0] ||
      `${cleanTitle(title)} 관련 이미지와 링크를 이전한 기록입니다.`,
    body: paragraphize(bodyText),
    images,
    links,
  });
}

await mkdir("src/data", { recursive: true });
await mkdir("public/assets/tistory", { recursive: true });
await writeFile(OUT_MANIFEST, JSON.stringify(imageDownloads, null, 2));
await writeFile(
  OUT_DATA,
  `export type TistoryArchiveType = "프로필" | "게재" | "수상" | "입주" | "증명" | "인터뷰" | "지원";\n\n` +
    `export type TistoryArchiveEntry = {\n` +
    `  id: number;\n` +
    `  slug: string;\n` +
    `  title: string;\n` +
    `  originalTitle: string;\n` +
    `  date: string;\n` +
    `  sourceUrl: string;\n` +
    `  type: TistoryArchiveType;\n` +
    `  summary: string;\n` +
    `  body: string[];\n` +
    `  images: Array<{ src: string; originalSrc: string; alt: string; width?: number; height?: number }>;\n` +
    `  links: Array<{ href: string; label: string }>;\n` +
    `};\n\n` +
    `export const tistoryArchive = ${JSON.stringify(entries, null, 2)} satisfies TistoryArchiveEntry[];\n\n` +
    `export const recentTistoryArchive = tistoryArchive.slice(0, 6);\n`
);

console.log(`Imported ${entries.length} posts and ${imageDownloads.length} images.`);
