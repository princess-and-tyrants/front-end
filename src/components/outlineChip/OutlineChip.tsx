import { VoteDetail } from "@/types/vote";
import { pointColorMBTIPair } from "@/utils/functions";
import "./outlinechip.scss";

const OutlineChip = ({ visitorData }: { visitorData: VoteDetail }) => {
  const fullMBTI = visitorData.mbti_result;
  const pointColor = pointColorMBTIPair[fullMBTI];

  return (
    <div className={`outline-chip b-${pointColor} `}>
      <span className={`f-caption f-${pointColor}`}>{`${fullMBTI} 예상`}</span>
    </div>
  );
};

export default OutlineChip;
