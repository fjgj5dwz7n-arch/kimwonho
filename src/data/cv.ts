export type CvItem = {
  year: string;
  title: string;
  organization?: string;
  detail?: string;
};

export type CvSection = {
  title: string;
  items: CvItem[];
};

export const cvSections: CvSection[] = [
  {
    title: "학력 및 연구",
    items: [
      {
        year: "2026",
        title: "현대시 연구 주제 정리",
        organization: "개인 연구",
        detail: "한국 현대시의 여백, 인용, 도시 감각을 중심으로 연구 노트 작성.",
      },
      {
        year: "2025",
        title: "문학비평 세미나 참여",
        organization: "비평 읽기 모임",
        detail: "현대 비평 이론과 한국 시 텍스트를 함께 읽는 월간 세미나.",
      },
    ],
  },
  {
    title: "발표 및 게재",
    items: [
      {
        year: "2025",
        title: "시와 인용의 거리",
        organization: "세미나 발표",
        detail: "비평문 안에서 인용이 만드는 독해의 위치를 발표.",
      },
      {
        year: "2024",
        title: "작은 방들의 인덱스",
        organization: "온라인 문학 기록",
        detail: "읽기와 쓰기의 생활 리듬을 기록한 산문.",
      },
    ],
  },
  {
    title: "편집 및 활동",
    items: [
      {
        year: "2026",
        title: "작품 아카이브 구축",
        organization: "개인 프로젝트",
        detail: "시, 비평, 연구 노트를 한 곳에서 관리하는 온라인 포트폴리오 운영.",
      },
      {
        year: "2024",
        title: "시 낭독 및 합평 참여",
        organization: "지역 문학 모임",
        detail: "초고 합평, 낭독회, 독서 기록 공유.",
      },
    ],
  },
];
