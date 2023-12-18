import React from "react";

interface ParagraphProps {
  text?: React.ReactNode;
  color?: string;
  size?: string;
  bold?: boolean;
  children?: React.ReactNode; 
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  children,
  bold,
  color = "black",
  size = "16px",
}) => {
  const paragraphStyle: React.CSSProperties = {
    color: color,
    fontSize: size,
    marginBottom: "10px",
  };

  if (bold) paragraphStyle.fontWeight = "bold";
 
  const content = text !== undefined ? text : children;

  return <p style={paragraphStyle}>{content}</p>;
};

export default Paragraph;
