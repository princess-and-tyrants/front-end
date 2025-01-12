import "./outlinechipgray.scss";

const OutlineChip = ({ name }: { name: string }) => {
  return (
    <div className="outline-chip-gray">
      <span className="f-caption">{`${name}냥이 남겼어요`}</span>
    </div>
  );
};

export default OutlineChip;
