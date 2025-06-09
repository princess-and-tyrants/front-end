import { useMyProfileQuery } from "../../hook/profile/useMyInfoQuery";
import { useMyVoteResultQuery } from "../../hook/vote/useMyVoteQuery";
import { useMyVoteListQuery } from "../../hook/vote/useMyVoteList";
import MbtiPageTemplate from "@/components/templates/MbtiPageTemplate";
import "./home.scss";
// import { Suspense } from "react";
// import Loading from "react-loading";

const HomeContent = () => {
  const { data: profileData } = useMyProfileQuery();
  const { data: voteResult } = useMyVoteResultQuery();
  const { data: voteList } = useMyVoteListQuery();

  return (
    <MbtiPageTemplate
      profileData={profileData}
      voteResult={voteResult ? voteResult.data : null}
      voteList={voteList ? voteList.data : []}
      isMine={true}
    />
  );
};

const Home = () => (
  // <Suspense fallback={<Loading />}>
  <HomeContent />
  // </Suspense>
);

export default Home;
