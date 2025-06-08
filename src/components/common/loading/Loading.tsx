import ReactLoading from "react-loading";
import "./loading.scss";

const Loading = () => (
  <div className="loading-wrapper">
    <ReactLoading type="balls" color="#918cea" height={50} width={50} />
  </div>
);
export default Loading;
