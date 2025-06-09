import { useUserVoteResultQuery } from "../../hook/vote/useVoteResultQuery";
import { useUserVoteListQuery } from "../../hook/vote/useVoteList";
import MbtiPageTemplate from "@/components/templates/MbtiPageTemplate";
import { useUserProfileQuery } from "@/hook/profile/useUserInfoQuery";
import { useParams } from "react-router-dom";
// import { Suspense } from "react";
// import Loading from "react-loading";

const USer = () => {
  const { id } = useParams<{ id: string }>();

  const { data: profileData } = useUserProfileQuery(id ?? "");
  const { data: voteResult } = useUserVoteResultQuery(id ?? "");
  const { data: voteList } = useUserVoteListQuery(id ?? "");

  return (
    <MbtiPageTemplate
      profileData={profileData}
      voteResult={voteResult ? voteResult.data : null}
      voteList={voteList ? voteList.data : []}
      isMine={true}
    />
  );
};

export default USer;
