import researchData from "./research.json";

export type ResearchProject = {
  title: string;
  period: string;
  status: "진행 중" | "정리 완료" | "보류";
  summary: string;
  questions: string[];
};

export const researchProjects = researchData as ResearchProject[];
