import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./forms/Button";
import TextInput from "./forms/TextInput";

const Banner = () => {
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
      <div className="container banner">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 ">
            <h1 className="h1 text-secondary">Check Your Carbon Credit</h1>
            <p className="text-secondary">
              Explore a variety of carbon credit projects and select the one
              that best suits your needs. Track and manage your portfolio with
              ease to make a positive impact on the environment.
            </p>
            <div className="input-group mb-3 d-flex justify-content-start">
              <>
                <TextInput
                  maxWidth="300px"
                  placeholder="Enter Carbon Credits (Tons)"
                  type="number"
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
            </div>
          </div>
          <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
            <div className="logos">
              <img
                src="https://i.ibb.co/znMjYkJ/Pngtree-environmental-protection-natural-environment-logo-9203785.png"
                className="device"
              />
              <div className="screen"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
