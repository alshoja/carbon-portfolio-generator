import React from "react";

interface ButtonProps {
  placeholder: string;
  maxWidth: string;
  type: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  placeholder,
  maxWidth,
  type,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      style={{ maxWidth }}
      onClick={onClick}
    >
      {placeholder}
    </button>
  );
};

export default Button;
