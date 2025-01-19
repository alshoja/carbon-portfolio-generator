import React from "react";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          borderRadius: "8px",
          background: "#ffff",
        }}
      >
        <h2>Error</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
