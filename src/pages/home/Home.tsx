import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/auth";
import { useMyProfileQuery } from "../../hook/profile/useMyInfoQuery";
import { useMyVoteResultQuery } from "../../hook/vote/useVoteResultQuery";
import { useMyVoteListQuery } from "../../hook/vote/useVoteList";
import MbtiPageTemplate from "@/components/templates/MbtiPageTemplate";
import Loading from "@/components/common/loading/Loading";
import "./home.scss";
// import { Suspense } from "react";
// import Loading from "react-loading";

const HomeContent = () => {
  const { isLoggedIn } = useAuthStore();
  const navitate = useNavigate();

  const { data: profileData, isLoading } = useMyProfileQuery(isLoggedIn);
  const { data: voteResult } = useMyVoteResultQuery(isLoggedIn);
  const { data: voteList } = useMyVoteListQuery(isLoggedIn);

  if (!isLoggedIn) {
    navitate("/login");
    return null;
  }

  if (isLoading || !profileData) {
    return <Loading />;
  }

  return (
    <MbtiPageTemplate
      profileData={profileData}
      voteResult={voteResult ? voteResult.data : null}
      voteList={voteList ? voteList.data : []}
      isMine={true}
    />
  );
};

const Home = () => <HomeContent />;

export default Home;
