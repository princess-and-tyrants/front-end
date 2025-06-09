import "./backHeader.scss";
import arrowLeft from "../../assets/arrow-left.svg";
import { useNavigate } from "react-router";

const BackHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="back-header-container">
      <img
        className="back"
        src={arrowLeft}
        alt="back"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default BackHeader;
