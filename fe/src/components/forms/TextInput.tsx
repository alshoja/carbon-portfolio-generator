import React from "react";

interface CustomInputProps {
  placeholder: string;
  maxWidth: string;
  type: string;
  className: string;
}

const CustomTextInput: React.FC<CustomInputProps> = ({
  placeholder,
  maxWidth,
  type,
  className,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      style={{ maxWidth }}
    />
  );
};

export default CustomTextInput;
