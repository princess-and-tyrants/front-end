import { getMBTIColor, getMBTIScoreArray } from "../../utils/functions";
import { MBTIScoreDataType } from "../../utils/types";
import { MBTIDCardDataType } from "../MBTIDCard/MBTIDCard";
import "./mbtiscoregraph.scss";

const GraphItem = ({
  data,
  color,
}: {
  data: MBTIScoreDataType;
  color: string;
}) => {
  return (
    <div className="graph-item">
      <div className="graph-char f-caption">{data.char}</div>
      <div className="graph-bar">
        <div
          className="graph-bar-progress"
          style={{ width: `${data.score}%`, background: color }}
        ></div>
      </div>
      <p className="graph-score f-caption">{`${data.score}%`}</p>
    </div>
  );
};
const MBTIScoreGraph = ({ data }: { data: MBTIDCardDataType }) => {
  const scoreData = getMBTIScoreArray(data);
  return (
    <div className="mbti-score-graph-container">
      {scoreData.map((d, idx) => (
        <GraphItem key={idx} data={d} color={getMBTIColor(data.mbti)} />
      ))}
    </div>
  );
};

export default MBTIScoreGraph;
