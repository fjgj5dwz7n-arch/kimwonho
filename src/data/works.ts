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
    slug: "dacheung-2025-spring",
    title: "다층 2025 봄",
    genre: "시",
    year: "2025",
    publication: "《다층》 2025 봄",
    status: "발표",
    excerpt: "문예지 게재 기록과 관련 이미지를 티스토리 아카이브에서 이전했습니다.",
    note: "상세 자료는 아카이브의 《다층》 2025 봄 항목에서 확인할 수 있습니다.",
    keywords: ["문예지", "게재", "2025"],
  },
  {
    slug: "siwa-sanmun-2025-spring",
    title: "시와 산문 2025 봄",
    genre: "시",
    year: "2025",
    publication: "《시와 산문》 2025 봄",
    status: "발표",
    excerpt: "문예지 게재 기록과 관련 이미지를 티스토리 아카이브에서 이전했습니다.",
    note: "상세 자료는 아카이브의 《시와 산문》 2025 봄 항목에서 확인할 수 있습니다.",
    keywords: ["문예지", "게재", "2025"],
  },
  {
    slug: "modak",
    title: "모닥",
    genre: "시",
    year: "2025",
    publication: "《모닥》",
    status: "발표",
    excerpt: "웹 공개 링크와 관련 이미지를 티스토리 아카이브에서 이전했습니다.",
    note: "상세 자료는 아카이브의 《모닥》 항목에서 확인할 수 있습니다.",
    keywords: ["웹진", "게재", "모닥"],
  },
  {
    slug: "hyeondaesihak-2025",
    title: "현대시학 2025 1-2월",
    genre: "시",
    year: "2025",
    publication: "《현대시학》 2025 1-2월",
    status: "발표",
    excerpt: "문예지 게재 기록과 관련 이미지를 티스토리 아카이브에서 이전했습니다.",
    note: "상세 자료는 아카이브의 《현대시학》 2025 1-2월 항목에서 확인할 수 있습니다.",
    keywords: ["현대시학", "게재", "2025"],
  },
  {
    slug: "jaeum-moeum-2024-winter",
    title: "자음과모음 2024 겨울",
    genre: "시",
    year: "2024",
    publication: "《자음과모음》 2024 겨울",
    status: "발표",
    excerpt: "문예지 게재 기록과 관련 이미지를 티스토리 아카이브에서 이전했습니다.",
    note: "상세 자료는 아카이브의 《자음과모음》 2024 겨울 항목에서 확인할 수 있습니다.",
    keywords: ["자음과모음", "게재", "2024"],
  },
  {
    slug: "gongsisa-2023-april",
    title: "공정한시인의사회 2023 4월",
    genre: "시",
    year: "2023",
    publication: "《공정한시인의사회》 2023 4월",
    status: "발표",
    excerpt: "웹 공개 링크와 관련 이미지를 티스토리 아카이브에서 이전했습니다.",
    note: "상세 자료는 아카이브의 《공정한시인의사회》 2023 4월 항목에서 확인할 수 있습니다.",
    keywords: ["웹진", "게재", "2023"],
  },
];

export const featuredWorks = works.slice(0, 3);
