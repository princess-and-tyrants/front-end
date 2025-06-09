export type Category = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface Question {
  id: number;
  question: string;
  category: Category;
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      "새로운 것을 배울 때, 일반적인 원리보다 세부적인 예를 먼저 이해하려고 하나요?",
    category: "S",
  },
  {
    id: 2,
    question: "문제를 해결할 때 논리적 접근을 더 선호하나요?",
    category: "T",
  },
  {
    id: 3,
    question: "사실과 데이터로 결정을 내리는 편인가요?",
    category: "S",
  },
  {
    id: 4,
    question: "예상치 못한 상황에서도 즐거움을 느끼는 경우가 많나요?",
    category: "P",
  },
  {
    id: 5,
    question: "계획을 철저히 세운 후 이를 그대로 따르려고 노력하나요?",
    category: "J",
  },
  {
    id: 6,
    question: "어려운 대화에서도 상대방의 기분을 더 신경 쓰나요?",
    category: "F",
  },
  {
    id: 7,
    question: "사람들과 시간을 보낸 후, 피로감을 느끼는 경우가 많나요?",
    category: "I",
  },
  {
    id: 8,
    question: "당신은 자주 깊은 생각에 잠기나요?",
    category: "I",
  },
  {
    id: 9,
    question: "상황에 따라 유연하게 대처하는 것을 더 좋아하나요?",
    category: "P",
  },
  {
    id: 10,
    question: "마지막 순간에 계획을 변경하는 것이 부담스러운가요?",
    category: "J",
  },
  {
    id: 11,
    question: "정해진 루틴이 없을 때 불안감을 느끼나요?",
    category: "J",
  },
  {
    id: 12,
    question: "새로운 가능성을 탐구할 때 에너지를 느끼나요?",
    category: "N",
  },
  {
    id: 13,
    question: "미래의 가능성을 상상하는 것을 즐기나요?",
    category: "N",
  },
  {
    id: 14,
    question: "낯선 환경에서 먼저 대화를 시작하는 편인가요?",
    category: "E",
  },
  {
    id: 15,
    question: "객관적인 기준이 주관적인 감정보다 더 중요하다고 느끼나요?",
    category: "T",
  },
  {
    id: 16,
    question: "혼자 있는 시간을 오랫동안 즐길 수 있나요?",
    category: "I",
  },
  {
    id: 17,
    question: "중요한 결정을 내릴 때 주로 주변 사람들과 상의하나요?",
    category: "E",
  },
  {
    id: 18,
    question:
      "새로운 아이디어를 생각하는 것보다 이미 존재하는 것에 집중하나요?",
    category: "S",
  },
  {
    id: 19,
    question: "당신은 새로운 사람들과 쉽게 친해지는 편인가요?",
    category: "E",
  },
  {
    id: 20,
    question: "모임에서 주로 이야기를 주도하는 편인가요?",
    category: "E",
  },
  {
    id: 21,
    question: "일상에서 세부적인 사항에 더 집중하는 편인가요?",
    category: "S",
  },
  {
    id: 22,
    question: "미리 계획을 세우는 것을 선호하나요?",
    category: "J",
  },
  {
    id: 23,
    question:
      "어려운 상황에서도 감정보다는 냉철한 사고를 유지하려고 노력하나요?",
    category: "T",
  },
  {
    id: 24,
    question: "혼자 보내는 시간이 에너지를 충전하는 데 도움이 되나요?",
    category: "I",
  },
  {
    id: 25,
    question: "다른 사람에게 조언할 때 사실 중심으로 말하는 편인가요?",
    category: "T",
  },
  {
    id: 26,
    question: "실질적인 문제 해결에 관심이 많은 편인가요?",
    category: "S",
  },
  {
    id: 27,
    question: "결정할 때 사람들의 감정을 우선적으로 고려하나요?",
    category: "F",
  },
  {
    id: 28,
    question: "일정이 없는 자유로운 하루를 즐기는 편인가요?",
    category: "P",
  },
  {
    id: 29,
    question: "갑작스러운 변화가 스트레스를 유발하나요?",
    category: "J",
  },
  {
    id: 30,
    question: "모든 일이 정리된 상태에서 편안함을 느끼나요?",
    category: "J",
  },
  {
    id: 31,
    question: "혁신적인 아이디어를 떠올리는 것을 즐기나요?",
    category: "N",
  },
  {
    id: 32,
    question: "당신은 종종 다른 사람을 돕기 위해 개인적인 시간을 희생하나요?",
    category: "F",
  },
  {
    id: 33,
    question:
      "논리적이고 객관적인 판단을 내리는 것이 더 중요하다고 생각하나요?",
    category: "T",
  },
  {
    id: 34,
    question: "추상적인 개념보다는 구체적인 예시가 이해하기 쉽나요?",
    category: "S",
  },
  {
    id: 35,
    question: "당신은 공감을 잘한다는 평가를 자주 받나요?",
    category: "F",
  },

  {
    id: 36,
    question: "작은 디테일에 집중하기보다 큰 그림을 보려고 하나요?",
    category: "N",
  },
  {
    id: 37,
    question: "많은 사람들과 함께 있을 때 에너지를 얻나요?",
    category: "E",
  },
  {
    id: 38,
    question: "미래보다는 현재에 더 초점을 맞추나요?",
    category: "S",
  },
];
