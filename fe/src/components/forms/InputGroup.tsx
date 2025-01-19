import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import TextInput from "./TextInput";

const InputGroup: React.FC = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    if (!textValue.trim()) {
      alert("Please enter a valid value!");
      return;
    }
    const queryParams = new URLSearchParams({
      credits: textValue,
    }).toString();

    navigate(`/check/credit?${queryParams}`);
  };
  return (
    <>
      <TextInput
      maxWidth="300px"
      placeholder="Enter Carbon Credits (Tons)"
      type="text"
      className="form-control form-control-sm custom-input"
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      />
      <Button
      placeholder="Generate Portfolio"
      maxWidth="300px"
      type="button"
      className="btn-success"
      onClick={handleButtonClick}
      />
    </>
  );
};

export default InputGroup;
