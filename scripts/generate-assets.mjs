import { writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";

const width = 1200;
const height = 1680;
const pixels = new Uint8Array(width * height * 4);

let seed = 42;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 0xffffffff;
};

const setPixel = (x, y, r, g, b, a = 255) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const i = (y * width + x) * 4;
  pixels[i] = r;
  pixels[i + 1] = g;
  pixels[i + 2] = b;
  pixels[i + 3] = a;
};

const rect = (x, y, w, h, color) => {
  const [r, g, b, a = 255] = color;
  const x2 = Math.min(width, x + w);
  const y2 = Math.min(height, y + h);
  for (let yy = Math.max(0, y); yy < y2; yy += 1) {
    for (let xx = Math.max(0, x); xx < x2; xx += 1) {
      setPixel(xx, yy, r, g, b, a);
    }
  }
};

const line = (x1, y1, x2, y2, color) => {
  const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  for (let i = 0; i <= steps; i += 1) {
    const t = steps === 0 ? 0 : i / steps;
    const x = Math.round(x1 + (x2 - x1) * t);
    const y = Math.round(y1 + (y2 - y1) * t);
    rect(x, y, 2, 2, color);
  }
};

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const grain = Math.floor(rand() * 11) - 5;
    const base = 246 + grain;
    setPixel(x, y, base, base, Math.max(230, base - 4));
  }
}

const ink = [18, 18, 18, 255];
const soft = [94, 91, 84, 255];
const pale = [218, 215, 205, 255];

rect(104, 94, 8, 1490, ink);
rect(1088, 94, 2, 1490, ink);
rect(104, 94, 986, 2, ink);
rect(104, 1582, 986, 2, ink);
rect(180, 190, 360, 14, ink);
rect(180, 232, 710, 4, soft);
rect(180, 260, 630, 4, pale);

for (let i = 0; i < 15; i += 1) {
  const y = 360 + i * 62;
  const w = 420 + Math.floor(rand() * 420);
  rect(180, y, w, 7, i % 4 === 0 ? ink : soft);
  rect(180, y + 22, Math.floor(w * (0.55 + rand() * 0.25)), 3, pale);
}

for (let c = 0; c < 5; c += 1) {
  const x = 190 + c * 168;
  rect(x, 1170, 2, 250, pale);
  for (let i = 0; i < 7; i += 1) {
    const h = 40 + Math.floor(rand() * 140);
    rect(x + 20, 1190 + i * 30, 88 + Math.floor(rand() * 48), 4, soft);
    rect(x + 20 + Math.floor(rand() * 80), 1196 + i * 30, 18, h > 120 ? 4 : 2, pale);
  }
}

rect(780, 342, 212, 500, [255, 255, 252, 255]);
rect(780, 342, 212, 2, ink);
rect(780, 840, 212, 2, ink);
rect(780, 342, 2, 500, ink);
rect(990, 342, 2, 500, ink);

for (let i = 0; i < 18; i += 1) {
  const y = 392 + i * 23;
  rect(812, y, 118 + Math.floor(rand() * 45), 3, i % 3 === 0 ? ink : soft);
}

line(180, 1040, 920, 972, pale);
line(180, 1046, 920, 978, pale);
line(540, 1450, 1040, 1380, soft);
line(540, 1456, 1040, 1386, soft);
rect(180, 1480, 120, 10, ink);
rect(320, 1480, 64, 10, soft);
rect(404, 1480, 34, 10, pale);

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return c >>> 0;
});

const crc32 = (buffer) => {
  let c = 0xffffffff;
  for (const byte of buffer) {
    c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
};

const raw = Buffer.alloc((width * 4 + 1) * height);
for (let y = 0; y < height; y += 1) {
  const rowStart = y * (width * 4 + 1);
  raw[rowStart] = 0;
  pixels.copy?.(raw, rowStart + 1, y * width * 4, (y + 1) * width * 4);
  if (!pixels.copy) {
    raw.set(pixels.subarray(y * width * 4, (y + 1) * width * 4), rowStart + 1);
  }
}

const header = Buffer.alloc(13);
header.writeUInt32BE(width, 0);
header.writeUInt32BE(height, 4);
header[8] = 8;
header[9] = 6;
header[10] = 0;
header[11] = 0;
header[12] = 0;

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk("IHDR", header),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

writeFileSync("public/assets/folio-plate.png", png);
console.log("generated public/assets/folio-plate.png");
