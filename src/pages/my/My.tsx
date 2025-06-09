import { useNavigate } from "react-router-dom";
import { useMyProfileQuery } from "@/hook/profile/useMyInfoQuery";
import useAuthStore from "@/store/auth";

import { Layout } from "@/components/layout/Layout";
import ProfileCard from "@/components/card/profileCard/ProfileCard";
import Loading from "@/components/common/loading/Loading";
import "./my.scss";

const My = () => {
  const { isLoggedIn } = useAuthStore();
  const navitate = useNavigate();

  const { data: profileData, isLoading } = useMyProfileQuery(isLoggedIn);

  if (!isLoggedIn) {
    navitate("/login");
    return null;
  }
  if (isLoading || !profileData) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className="title f-title2">나의 MBTiD</div>
      {profileData && <ProfileCard data={profileData} isMine={true} />}
    </Layout>
  );
};

export default My;
