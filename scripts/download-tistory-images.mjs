import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const manifestPath = "/private/tmp/kimwonho-image-downloads.json";
const downloads = JSON.parse(await readFile(manifestPath, "utf8"));

let done = 0;
for (const item of downloads) {
  await mkdir(dirname(item.file), { recursive: true });
  const response = await fetch(item.url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari",
      referer: "https://kimwonho.tistory.com/",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${item.url}: ${response.status}`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(item.file, bytes);
  done += 1;
  if (done % 10 === 0 || done === downloads.length) {
    console.log(`Downloaded ${done}/${downloads.length}`);
  }
}
