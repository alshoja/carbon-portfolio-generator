import React from "react";

interface ButtonProps {
  placeholder: string;
  maxWidth: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  placeholder,
  maxWidth,
  type,
  className,
}) => {
  return (
    <button type={type} className={`btn ${className}`} style={{ maxWidth }}>
      {placeholder}
    </button>
  );
};

export default Button;
