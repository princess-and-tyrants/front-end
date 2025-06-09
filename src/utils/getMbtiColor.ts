import { MBTIColorPairType, MBTIType } from "./types";

export const getMBTIColor = (mbti: MBTIType) => {
  const MBTIColorPair: MBTIColorPairType = {
    INFJ: "#3FAC75",
    INFP: "#3FAC75",
    INTJ: "#6C60C6",
    INTP: "#6C60C6",
    ISTJ: "#3CC4C8",
    ISTP: "#F3BE3B",
    ISFJ: "#3CC4C8",
    ISFP: "#F3BE3B",
    ENTJ: "#6C60C6",
    ENFJ: "#3FAC75",
    ENFP: "#3FAC75",
    ENTP: "#6C60C6",
    ESTJ: "#3CC4C8",
    ESTP: "#F3BE3B",
    ESFJ: "#3CC4C8",
    ESFP: "#F3BE3B",
  };

  return MBTIColorPair[mbti];
};

export const getMBTIBGColor = (mbti: MBTIType) => {
  const MBTIColorPair: MBTIColorPairType = {
    INFJ: "#EBFCF4",
    INFP: "#EBFCF4",
    INTJ: "#FAF2FD",
    INTP: "#FAF2FD",
    ISTJ: "#E5F8FF",
    ISTP: "#FDF7DB",
    ISFJ: "#E5F8FF",
    ISFP: "#FDF7DB",
    ENTJ: "#FAF2FD",
    ENFJ: "#EBFCF4",
    ENFP: "#EBFCF4",
    ENTP: "#FAF2FD",
    ESTJ: "#E5F8FF",
    ESTP: "#FDF7DB",
    ESFJ: "#E5F8FF",
    ESFP: "#FDF7DB",
  };

  return MBTIColorPair[mbti];
};

export const pointColorMBTIPair = {
  INFJ: "green",
  INFP: "green",
  INTJ: "purple",
  INTP: "purple",
  ISTJ: "blue",
  ISTP: "yellow",
  ISFJ: "blue",
  ISFP: "yellow",
  ENTJ: "purple",
  ENFJ: "green",
  ENFP: "green",
  ENTP: "purple",
  ESTJ: "blue",
  ESTP: "yellow",
  ESFJ: "blue",
  ESFP: "yellow",
};
