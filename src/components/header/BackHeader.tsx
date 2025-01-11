import "./BackHeader.scss";
import arrowLeft from "../../assets/arrow-left.svg";

const BackHeader = () => {
  return (
    <div className="back-header-container">
      <img className="back" src={arrowLeft} alt="back" />
    </div>
  );
};

export default BackHeader;
