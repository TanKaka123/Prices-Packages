import React from "react";
import colors from "@/constants/theme";
import { formatToUSD } from "@/utils";

interface CardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  onAction?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  thumbnail,
  onAction,
}) => {
  return (
    <button
      className="max-w-sm rounded overflow-hidden shadow-lg min-h-full"
      onClick={onAction}
    >
      <img className="w-full" src={thumbnail} alt="Thumbnail Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          style={{ backgroundColor: colors.PRIMARY, color: colors.WHITE }}
        >
          {formatToUSD(price)}
        </span>
      </div>
    </button>
  );
};

export default Card;
