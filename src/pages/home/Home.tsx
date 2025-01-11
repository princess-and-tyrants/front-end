import { useState } from "react";
import { Layout, PageLayout } from "../../components/layout/Layout";
import useAuthStore from "../../store/auth";

const Home = () => {
  const { setToken, accessToken } = useAuthStore();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // login api
    setToken(id + password);
    // 홈으로 이동
    window.location.href = "/";
  };
  return (
    <PageLayout>
      <Layout>
        <h1>로그인</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>아이디</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">로그인</button>
        </form>
        accessToken: {accessToken}
      </Layout>
    </PageLayout>
  );
};

export default Home;
