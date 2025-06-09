import { mbtiType } from "./mbti";
// 투표 결과
export interface VoteResult {
  total_count: number;
  mbti_ei_score: number;
  mbti_sn_score: number;
  mbti_tf_score: number;
  mbti_jp_score: number;
  mbti_result: mbtiType | null;
}
// 투표 결과 res
export interface VoteResultResponse {
  message: string;
  data: VoteResult;
}
// 투표 생성 req
export interface VoteRequest {
  target_user_id: string;
  first_mbti_element: string;
  second_mbti_element: string;
  third_mbti_element: string;
  forth_mbti_element: string;
  comment: string;
  incognito: string;
}
// 방명록 리스트 res
export interface VoteListResponse {
  message: string;
  data: VoteDetail[];
}
// 방명록
export type VoteDetail = {
  vote_id: string;
  voting_user_id: string;
  voting_user_nickname: string; // 투표한 유저 닉네임
  voting_user_mbti: mbtiType; // 투표받은 유저 닉네임
  mbti_result: mbtiType;
  comment: string;
  incognito: "Y" | "N";
};
