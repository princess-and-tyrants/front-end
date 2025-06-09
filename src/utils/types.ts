export type MBTIScoreDataType = {
  char: string;
  score: number;
};

export type VisitorDataType = {
  first_mbti_element: string;
  second_mbti_element: string;
  third_mbti_element: string;
  fourth_mbti_element: string;
  comment: string;
  incognito: boolean;
};

export type MBTIType =
  | "INFJ"
  | "INFP"
  | "INTJ"
  | "INTP"
  | "ISTJ"
  | "ISTP"
  | "ISFJ"
  | "ISFP"
  | "ENTJ"
  | "ENFJ"
  | "ENFP"
  | "ENTP"
  | "ESTJ"
  | "ESTP"
  | "ESFJ"
  | "ESFP";

export type MBTIColorPairType = {
  [key in MBTIType]: string;
};
