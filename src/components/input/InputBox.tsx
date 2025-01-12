import React from "react";
import "./InputBox.scss";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder: string;
  inputType: "text" | "password";
}
const InputBox = React.forwardRef<HTMLInputElement, InputBoxProps>(
  ({ placeholder, inputType, ...props }, ref) => {
    return (
      <div className="input-wrapper">
        <input
          type={inputType}
          required
          placeholder={placeholder}
          className="input-box f-body1"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default InputBox;
