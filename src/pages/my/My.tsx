import { useNavigate } from "react-router-dom";
import { queryClient } from "@/lib/queryClient";
import useAuthStore from "@/store/auth";

import { Layout } from "@/components/layout/Layout";
import Loading from "@/components/common/loading/Loading";
import MyMbtiSettingCard from "@/components/card/myMbtiSettingsCard/MyMbtiSettingsCard";
import "./my.scss";

const My = () => {
  const { isLoggedIn, clearToken, userInfo } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    queryClient.clear();
    clearToken();
  };

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }
  if (!userInfo) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className="title f-title2">나의 MBTiD</div>
      <MyMbtiSettingCard data={userInfo} onLogout={handleLogout} />
    </Layout>
  );
};

export default My;
