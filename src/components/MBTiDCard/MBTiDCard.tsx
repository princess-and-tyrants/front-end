import "./mbtidcard.scss";

export type MBTIDCardDataType = {
  name: string;
  mbti: string;
  mbti1_score: number;
  mbti2_score: number;
  mbti3_score: number;
  mbti4_score: number;
};

const MBTiDCard = ({ data }: { data: MBTIDCardDataType }) => {
  return (
    <div className="mbti-card-container">
      <div className="mbti-card__name">{data.name}</div>
      <div className="mbti-card__mbti">{data.mbti}</div>
    </div>
  );
};

export default MBTiDCard;
