import { Layout, PageLayout } from "../../components/layout/Layout";
import ProfileSmallBlue from "../../assets/profile-small-blue.svg";
import INTJ from "../../assets/INTJ.svg";

import "./home.scss";
import MBTIScoreGraph from "../../components/MBTIScoreGraph/MBTIScoreGraph";
import { MBTIDCardDataType } from "../../utils/types";

const Home = () => {
  const MBTIDCardData: MBTIDCardDataType = {
    name: "유화정",
    mbti: "INTJ",
    mbti1_score: 60,
    mbti2_score: 70,
    mbti3_score: 80,
    mbti4_score: 90,
  };
  const MBTIDCardData2: MBTIDCardDataType = {
    name: "유화정",
    mbti: "ISTJ",
    mbti1_score: 60,
    mbti2_score: 70,
    mbti3_score: 80,
    mbti4_score: 90,
  };

  return (
    <PageLayout className="home-page-layout">
      <Layout className="home-my-card-layout">
        <div className="mbti-card-container">
          <div className="title-wrapper">
            <h3 className="f-title2">{MBTIDCardData.name}의 MBTiD</h3>
          </div>
          <div className="img-wrapper">
            <img src={INTJ} alt="INFJ 프로필 이미지" className="mbti-image" />
          </div>
          <div className="mbti-data-container">
            <div className="mbti-title f-title1">{MBTIDCardData.mbti}</div>
            <div className="mbti-subtitle f-body2">
              모든 일에 대해 계획을 세우며
              <br /> 상상력이 풍부한 전략가입니다.
            </div>
            <MBTIScoreGraph data={MBTIDCardData} />
          </div>
        </div>
      </Layout>
      <Layout className="home-vote-card-layout">
        <h3 className="home-vote-title f-title2">친구들이 생각한 나의 MBTI</h3>
        <div className="mbti-vote-card-container">
          <div className="title-wrapper">
            <div className="image-wrapper">
              <img
                src={ProfileSmallBlue}
                alt="프로필 이미지"
                className="profile-image"
              />
            </div>
            <h3 className="title-text f-heading3">ISTJ</h3>
            <p className="subtitle-text f-caption">총 4명이 투표했어요!</p>
          </div>

          <MBTIScoreGraph data={MBTIDCardData2} />
        </div>
      </Layout>
      <Layout className="home-visitors-container">
        <h3 className="home-visitors-title f-title2">방명록</h3>
      </Layout>
    </PageLayout>
  );
};

export default Home;
