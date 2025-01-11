import { MBTIDCardDataType } from "../components/MBTIDCard/MBTIDCard";
import { MBTIColorPairType, MBTIScoreDataType, MBTIType } from "./types";

export const getMBTIScoreArray = (mbtiData: MBTIDCardDataType) => {
  const mbti = mbtiData.mbti;
  const res: MBTIScoreDataType[] = [];
  let score;

  score =
    mbtiData.mbti1_score > 50
      ? mbtiData.mbti1_score
      : 100 - mbtiData.mbti1_score;

  res.push({ char: mbti[0], score });

  score =
    mbtiData.mbti2_score > 50
      ? mbtiData.mbti2_score
      : 100 - mbtiData.mbti2_score;

  res.push({ char: mbti[1], score });

  score =
    mbtiData.mbti3_score > 50
      ? mbtiData.mbti3_score
      : 100 - mbtiData.mbti3_score;

  res.push({ char: mbti[2], score });

  score =
    mbtiData.mbti4_score > 50
      ? mbtiData.mbti4_score
      : 100 - mbtiData.mbti4_score;

  res.push({ char: mbti[3], score });

  return res;
};

export const getMBTIColor = (mbti: MBTIType) => {
  const MBTIColorPair: MBTIColorPairType = {
    INFJ: "#6C60C6",
    INFP: "#6C60C6",
    INTJ: "#6C60C6",
    INTP: "#6C60C6",
    ISTJ: "#3CC4C8",
    ISTP: "#6C60C6",
    ISFJ: "#6C60C6",
    ISFP: "#6C60C6",
    ENTJ: "#6C60C6",
    ENFJ: "#6C60C6",
    ENFP: "#6C60C6",
    ENTP: "#6C60C6",
    ESTJ: "#6C60C6",
    ESTP: "#6C60C6",
    ESFJ: "#6C60C6",
    ESFP: "#6C60C6",
  };

  return MBTIColorPair[mbti];
};

export const getMBTIBGColor = (mbti: MBTIType) => {
  const MBTIColorPair: MBTIColorPairType = {
    INFJ: "#FAF2FD",
    INFP: "#FAF2FD",
    INTJ: "#FAF2FD",
    INTP: "#FAF2FD",
    ISTJ: "#E5F8FF",
    ISTP: "#FAF2FD",
    ISFJ: "#FAF2FD",
    ISFP: "#FAF2FD",
    ENTJ: "#FAF2FD",
    ENFJ: "#FAF2FD",
    ENFP: "#FAF2FD",
    ENTP: "#FAF2FD",
    ESTJ: "#FAF2FD",
    ESTP: "#FAF2FD",
    ESFJ: "#FAF2FD",
    ESFP: "#FAF2FD",
  };

  return MBTIColorPair[mbti];
};
