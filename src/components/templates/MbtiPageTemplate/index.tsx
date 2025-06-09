import { Layout, PageLayout } from "@/components/layout/Layout";
import ProfileCard from "@/components/card/profileCard/ProfileCard";
import VoteResultCard from "@/components/card/voteResultCard/VoteResultCard";
import VoteList from "@/components/List/voteList/VoteList";
import ChevronRight from "@/assets/chevron-right.svg";
import { VoteDetail, VoteResult } from "@/types/vote";
import { UserMbtiProfile } from "@/types/profile";
import "./MbtiPageTemplate.scss";
import { useNavigate } from "react-router-dom";

interface MbtiPageTemplateProps {
  profileData: UserMbtiProfile;
  voteResult: VoteResult | null;
  voteList: VoteDetail[];
  isMine: boolean;
  onWriteClick?: () => void;
}

const MbtiPageTemplate = ({
  profileData,
  voteResult,
  voteList,
  isMine,
}: MbtiPageTemplateProps) => {
  const navigate = useNavigate();
  return (
    <PageLayout className="home-page-layout">
      {/* 프로필 카드 */}
      <Layout className="home-my-card-layout">
        <ProfileCard data={profileData} isMine={true} />
      </Layout>
      {/* 투표결과 카드 */}
      <Layout className="home-vote-card-layout">
        <h3 className="home-vote-title f-title2">
          친구들이 생각한 {isMine ? "나의" : `${profileData?.nickname}님의`}{" "}
          MBTI
        </h3>
        <VoteResultCard voteResult={voteResult ?? null} />
      </Layout>
      {/* 방명록 */}
      <Layout className="home-visitors-container">
        <div className="home-visitors-title-wrapper">
          <h3 className="home-visitors-title f-title2">방명록</h3>

          {!isMine && (
            <button
              onClick={() => {
                navigate(`/vote/${profileData.userId}`);
              }}
              className={`svg-button f-body2`}
            >
              <p className="f-body2">방명록 쓰기</p>
              <img
                src={ChevronRight}
                alt="방명록 쓰기"
                className="arrow-image"
              />
            </button>
          )}
        </div>
        <VoteList voteList={voteList || []} />
      </Layout>
    </PageLayout>
  );
};
export default MbtiPageTemplate;
