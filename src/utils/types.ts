export type MBTIDCardDataType = {
  name: string;
  mbti: MBTIType;
  mbti1_score: number;
  mbti2_score: number;
  mbti3_score: number;
  mbti4_score: number;
};
export type MBTIScoreDataType = {
  char: string;
  score: number;
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
