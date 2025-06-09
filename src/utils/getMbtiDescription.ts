import { mbtiDescriptionMap } from "../data/mbtiDescription";

export const getMbtiDescription = (mbti: string): string => {
  return mbtiDescriptionMap[mbti] ?? "설명이 존재하지 않습니다.";
};
