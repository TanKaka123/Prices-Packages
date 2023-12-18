import React from "react";
import colors from "@/constants/theme";

interface ButtonProps {
  isOutlet?: boolean;
  isDisable?: boolean;
  content: string;
  icon?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isGray?: boolean;
  borderRadius?: string;
  type?: "button" | "reset" | "submit";
  action?: (...args: any[]) => void;
}

const Button: React.FC<ButtonProps> = ({
  isOutlet = false,
  isDisable = false,
  type = "button",
  content,
  icon,
  isPrimary,
  isSecondary,
  isGray,
  borderRadius,
  action,
}) => {
  const buttonClasses = `font-bold py-2 px-4 text-white rounded border-solid border-2`;

  const currentColor = isPrimary
    ? colors.PRIMARY
    : isSecondary
    ? colors.SECONDARY
    : colors.GRAY;

  const typeButton: React.CSSProperties = {
    color: isOutlet ? currentColor : "white",
    backgroundColor: isOutlet ? "transparent" : currentColor,
    borderColor: isOutlet ? currentColor : "transparent",
  };

  const borderRadiusCss: React.CSSProperties = {
    borderRadius: borderRadius || "0",
  };

  return (
    <button
      onClick={action}
      className={`${buttonClasses} ${isGray ? "bg-gray-500" : ""}`}
      style={{ ...typeButton, ...borderRadiusCss }}
      disabled={isDisable}
      type={type}
    >
      {icon}
      {content}
    </button>
  );
};

export default Button;
