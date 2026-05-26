import cvData from "./cv.json";

export type CvItem = {
  year: string;
  title: string;
  organization?: string;
  detail?: string;
  href?: string;
};

export type CvSection = {
  title: string;
  items: CvItem[];
};

export const cvSections = cvData as CvSection[];
