import React from "react";

interface CustomInputProps {
  placeholder: string;
  maxWidth: string;
  type: string;
  className: string;
  value?: string | null | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CustomTextInput: React.FC<CustomInputProps> = ({
  placeholder,
  maxWidth,
  type,
  className,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      style={{ maxWidth }}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default CustomTextInput;
