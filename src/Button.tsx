import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#4f46e5",
        color: "white",
        borderRadius: "4px",
      }}
    >
      {label}
    </button>
  );
};
