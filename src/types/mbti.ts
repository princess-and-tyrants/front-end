export type mbtiType =
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
  [key in mbtiType]: string;
};

export type MbtiScoreProps = {
  mbti: mbtiType;
  ei: number;
  sn: number;
  tf: number;
  jp: number;
};
