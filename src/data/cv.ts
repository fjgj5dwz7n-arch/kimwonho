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
        year: "현재",
        title: "동국대학교 국어국문학과 석사 과정",
        organization: "현대문학 전공",
        detail: "티스토리 포트폴리오의 소개 자료를 이전했습니다.",
      },
      {
        year: "2020",
        title: "쓰기와 읽기 시작",
        organization: "개인 기록",
        detail: "2020년 12월 7일 처음 글을 쓰고 읽기 시작했다는 기록.",
      },
    ],
  },
  {
    title: "발표 및 게재",
    items: [
      {
        year: "2025",
        title: "《다층》, 《시와 산문》, 《현대시학》 게재",
        organization: "문예지",
        detail: "2025년 봄 및 1-2월호 게재 자료 이전.",
      },
      {
        year: "2024",
        title: "《자음과모음》 2024 겨울",
        organization: "문예지",
        detail: "게재 자료와 관련 이미지를 아카이브로 이전.",
      },
      {
        year: "2023",
        title: "《황해문화》, 《파란》, 《시산맥》 외 게재",
        organization: "문예지 및 웹진",
        detail: "2023년 문예지·웹진 게재 기록을 아카이브로 이전.",
      },
    ],
  },
  {
    title: "수상 및 활동",
    items: [
      {
        year: "2026",
        title: "연희문학창작촌 입주작가 선정",
        organization: "2026년 3분기",
        detail: "연희문학창작촌 입주작가 선정 자료 이전.",
      },
      {
        year: "2025",
        title: "제31회 동대문학상 시 부문/희곡 부문 심사위원 특별 언급",
        organization: "동대문학상",
        detail: "관련 공개 링크와 이미지 자료 이전.",
      },
      {
        year: "2024",
        title: "예술인 예술활동증명",
        organization: "한국예술인복지재단",
        detail: "예술활동증명 관련 자료 이전.",
      },
      {
        year: "2023",
        title: "윤동주시문학상, 가람이병기청년시문학상 등",
        organization: "문학상",
        detail: "수상 및 선정 자료를 아카이브로 이전.",
      },
    ],
  },
];
