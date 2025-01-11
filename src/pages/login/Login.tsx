import { Layout, PageLayout } from "../../components/layout/Layout";
import useAuthStore from "../../store/auth";
import logo from "../../assets/mbtidLogo.svg";
import "./login.scss";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import InputBox from "../../components/input/InputBox";

const Login = () => {
  const { setToken, accessToken } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = (data: LoginProps) => {
    console.log(data);
    // login api
    setToken(data.id + data.password);
    // 홈으로 이동
    navigate("/");
  };
  interface LoginProps {
    id: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  return (
    <PageLayout>
      <Layout>
        <div className="login-layout">
          <img src={logo} className="logo" />
          <div className="f-title2 title">
            나의 MBTI를 소개하고 <br />
            친구들에게 공유해보세요!
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="input-field">
              <InputBox
                placeholder={"아이디"}
                inputType="text"
                {...register("id", { required: true })}
              />
              {errors.id && (
                <p className="error-text f-caption ">아이디를 입력해주세요</p>
              )}
            </div>
            <div className="input-field">
              <InputBox
                placeholder={"비밀번호"}
                inputType="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="error-text f-caption ">비밀번호를 입력해주세요</p>
              )}
            </div>
            <p className="error-text f-caption">
              아이디 또는 비밀번호가 일치하지 않습니다.
            </p>
            <button type="submit" className="">
              로그인
            </button>
            <button type="submit" className="">
              회원가입
            </button>
          </form>
          "accessToken:" {accessToken}
        </div>
      </Layout>
    </PageLayout>
  );
};

export default Login;
