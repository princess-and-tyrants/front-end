import { MbtiScoreProps } from "../types/mbti";
import { MBTIScoreDataType } from "./types";

export const getMBTIScoreArray = ({ mbti, ei, sn, tf, jp }: MbtiScoreProps) => {
  const res: MBTIScoreDataType[] = [];
  let score;

  score = ei > 50 ? ei : 100 - ei;

  res.push({ char: mbti[0], score });

  score = sn > 50 ? sn : 100 - sn;

  res.push({ char: mbti[1], score });

  score = tf > 50 ? tf : 100 - tf;

  res.push({ char: mbti[2], score });

  score = jp > 50 ? jp : 100 - jp;

  res.push({ char: mbti[3], score });

  return res;
};
