import React from "react";

interface ErrorComponentProps {
  message: string;
  heading: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message,
  heading,
}) => {
  return (
    <div className="error-container">
      <h1>{heading}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
