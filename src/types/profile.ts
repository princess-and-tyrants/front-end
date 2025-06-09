import { MBTIType } from "./mbti";

export interface UserMbtiProfile {
  userId: string;
  nickname: string;
  mbti: MBTIType;
  mbti_ei_score: number;
  mbti_sn_score: number;
  mbti_tf_score: number;
  mbti_pj_score: number;
}
