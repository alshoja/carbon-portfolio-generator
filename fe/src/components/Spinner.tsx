import React from "react";
interface LoadingSpinnerProps {
  size?: string;
  color?: string;
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "50px",
  color = "#007bff",
  message = "Loading...",
}) => {
  return (
    <div className="loading-overlay">
      <div
        className="loading-spinner"
        style={{ width: size, height: size, borderColor: color }}
      />
      <div className="loading-text">{message}</div>
    </div>
  );
};

export default LoadingSpinner;
