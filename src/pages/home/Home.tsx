import { Layout, PageLayout } from "../../components/layout/Layout";

import "./home.scss";
import MBTiDCard, {
  MBTIDCardDataType,
} from "../../components/MBTiDCard/MBTiDCard";

const Home = () => {
  const MBTiDCardData: MBTIDCardDataType = {
    name: "testUser",
    mbti: "ESFJ",
    mbti1_score: 5,
    mbti2_score: 8,
    mbti3_score: 7,
    mbti4_score: 6,
  };

  return (
    <PageLayout className="home-page-layout">
      <Layout className="home-layout">
        <MBTiDCard data={MBTiDCardData} />
      </Layout>
    </PageLayout>
  );
};

export default Home;
