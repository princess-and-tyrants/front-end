import { useState } from "react";
import { Category, questions } from "../../data/mbti";
import { Layout } from "../../components/layout/Layout";

const MBTITest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  const getOppositeCategory = (category: Category): Category => {
    const opposites: {
      [key in Category]: Category;
    } = {
      E: "I",
      I: "E",
      S: "N",
      N: "S",
      T: "F",
      F: "T",
      J: "P",
      P: "J",
    };
    return opposites[category];
  };

  const handleAnswer = (isYes: boolean) => {
    const currentQuestion = questions[currentQuestionIndex];
    const updatedScores = { ...scores };

    if (isYes) {
      updatedScores[currentQuestion.category] += 1;
    } else {
      // 반대 축에 점수 추가
      const oppositeCategory = getOppositeCategory(currentQuestion.category);
      updatedScores[oppositeCategory] += 1;
    }

    setScores(updatedScores);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const calculatePercentages = () => {
    const totals = {
      EI: scores.E + scores.I,
      SN: scores.S + scores.N,
      TF: scores.T + scores.F,
      JP: scores.J + scores.P,
    };

    const percentages = {
      EI: Math.round((scores.E / totals.EI) * 100),
      SN: Math.round((scores.S / totals.SN) * 100),
      TF: Math.round((scores.T / totals.TF) * 100),
      JP: Math.round((scores.J / totals.JP) * 100),
    };

    // MBTI 계산
    const mbti = [
      percentages.EI > 50 ? "E" : "I",
      percentages.SN > 50 ? "S" : "N",
      percentages.TF > 50 ? "T" : "F",
      percentages.JP > 50 ? "J" : "P",
    ];

    return { percentages, mbti };
  };

  if (currentQuestionIndex >= questions.length) {
    const { percentages, mbti } = calculatePercentages();
    return (
      <Layout>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>결과 : {mbti.join("")}</h1>
          <p>
            외향(E) / 내향(I): {mbti[0]} {percentages.EI}%
          </p>
          <p>
            감각(S) / 직관(N): {mbti[1]} {percentages.SN}%
          </p>
          <p>
            사고(T) / 감정(F): {mbti[2]} {percentages.TF}%
          </p>
          <p>
            판단(J) / 인식(P): {mbti[3]} {percentages.JP}%
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>MBTI 테스트</h1>
        <p>{questions[currentQuestionIndex].question}</p>
        <button onClick={() => handleAnswer(true)}>예</button>
        <button onClick={() => handleAnswer(false)}>아니요</button>
      </div>
    </Layout>
  );
};

export default MBTITest;
