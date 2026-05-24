export type ArchiveItem = {
  date: string;
  title: string;
  type: "노트" | "초고" | "서지" | "행사";
  description: string;
};

export const archiveItems: ArchiveItem[] = [
  {
    date: "2026-05",
    title: "연작 시 원고 정리",
    type: "초고",
    description: "도시의 이동성과 기억을 다루는 시편 네 편의 배열을 검토.",
  },
  {
    date: "2026-03",
    title: "현대시 여백 연구 메모",
    type: "노트",
    description: "행갈이, 공백, 침묵의 기능을 중심으로 선행 연구 키워드 정리.",
  },
  {
    date: "2025-11",
    title: "비평문 참고 문헌 목록",
    type: "서지",
    description: "인용의 윤리와 독해의 위치를 다루는 이론서 및 논문 목록.",
  },
  {
    date: "2025-08",
    title: "작품 낭독회 기록",
    type: "행사",
    description: "초고 낭독 후 합평 내용을 정리하고 다음 수정 방향 기록.",
  },
];
