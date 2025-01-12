import { pointColorMBTIPair } from "../../utils/functions";
import { MBTIType, VisitorDataType } from "../../utils/types";
import "./outlinechip.scss";

const OutlineChip = ({ visitorData }: { visitorData: VisitorDataType }) => {
  const fullMBTI = (visitorData.first_mbti_element +
    visitorData.second_mbti_element +
    visitorData.third_mbti_element +
    visitorData.fourth_mbti_element) as MBTIType;
  const pointColor = pointColorMBTIPair[fullMBTI];

  return (
    <div className={`outline-chip b-${pointColor} `}>
      <span className={`f-caption f-${pointColor}`}>{`${fullMBTI} 예상`}</span>
    </div>
  );
};

export default OutlineChip;
