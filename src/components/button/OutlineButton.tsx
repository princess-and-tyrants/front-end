import { ButtonSize } from "./type";
import "./outlineButton.scss";

interface Props {
  children: React.ReactNode;
  size: ButtonSize;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

const OutlineButton = ({ children, size, type, disabled, onClick }: Props) => {
  return (
    <button
      data-size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`ouline-button ${disabled ? "disabled" : ""} ${size == "small" ? "f-caption" : "f-body1"}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
