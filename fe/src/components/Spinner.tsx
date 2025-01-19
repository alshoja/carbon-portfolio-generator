import React from "react";
import "../styles/spinner.css"; // Ensure you have the correct path to your CSS

interface LoadingSpinnerProps {
  size?: string; // Customize the size of the spinner
  color?: string; // Customize the color of the spinner
  message?: string; // Message to display inside the spinner
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "50px", // Default size
  color = "#007bff", // Default color
  message = "Loading...", // Default message
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
