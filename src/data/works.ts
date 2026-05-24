export type Work = {
  slug: string;
  title: string;
  genre: "시" | "비평" | "산문" | "번역";
  year: string;
  publication: string;
  status: "발표" | "미발표" | "진행 중";
  excerpt: string;
  note?: string;
  keywords: string[];
};

export const works: Work[] = [
  {
    slug: "after-the-rain-platform",
    title: "비가 그친 뒤의 승강장",
    genre: "시",
    year: "2026",
    publication: "미발표 연작",
    status: "진행 중",
    excerpt:
      "젖은 표지판 아래에서 이름들이 잠시 서로의 미래를 빌려 입는다.",
    note: "도시의 이동성과 기억의 지연을 다루는 연작의 첫 편.",
    keywords: ["도시", "이동", "기억"],
  },
  {
    slug: "white-margin",
    title: "흰 여백의 문법",
    genre: "비평",
    year: "2025",
    publication: "연구 노트",
    status: "미발표",
    excerpt:
      "현대시의 여백은 침묵의 장식이 아니라 발화가 지연되는 장소다.",
    note: "한국 현대시의 행갈이와 침묵의 형식을 정리한 비평 초안.",
    keywords: ["현대시", "여백", "형식"],
  },
  {
    slug: "small-rooms",
    title: "작은 방들의 인덱스",
    genre: "산문",
    year: "2024",
    publication: "문학 활동 기록",
    status: "발표",
    excerpt:
      "책상은 방의 중심이 아니라, 세계가 잠시 접히는 가장 얇은 면이다.",
    note: "읽기와 쓰기의 생활 리듬을 기록한 짧은 산문.",
    keywords: ["독서", "작업실", "기록"],
  },
  {
    slug: "poem-and-citation",
    title: "시와 인용의 거리",
    genre: "비평",
    year: "2024",
    publication: "세미나 발표문",
    status: "발표",
    excerpt:
      "인용은 원문을 반복하는 대신, 읽는 이의 위치를 새로 배치한다.",
    note: "비평문 안에서 인용이 수행하는 윤리와 리듬을 다룬 발표문.",
    keywords: ["비평", "인용", "읽기"],
  },
];

export const featuredWorks = works.slice(0, 3);
