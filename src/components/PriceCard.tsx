import React from "react";
import { GiCheckMark } from "react-icons/gi";

interface PriceCardProps {
  title: string;
  priceMonthly: string;
  priceAnnual: string;
  features: string[];
  isMonthly: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  priceMonthly,
  priceAnnual,
  features,
  isMonthly,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`p-6 rounded-lg text-center shadow-lg cursor-pointer transition-all transform ${
        isSelected ? "bg-[#ff662d] text-white scale-105" : "bg-[#2E2F33] text-white scale-100"
      }`}
      onClick={onSelect}
    >
      <h2 className="text-sm font-thin text-white leading-relaxed">{title}</h2>
      <p className="text-3xl leading-tight font-bold mt-4">
        {isMonthly ? priceMonthly : priceAnnual} <span className="font-thin text-sm">/ {isMonthly ? "Per Month" : "Per Year"}</span>
      </p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center gap-2 text-sm font-thin text-white leading-relaxed"
          >
            <span className="text-white"><GiCheckMark /></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
  className={`mt-8 py-2 px-8 rounded-full text-sm leading-relaxed border transition ${
    isSelected
      ? "bg-white text-[#ff662d] border-white font-semibold"
      : "bg-transparent text-white border-white"
  } hover:opacity-90`}
>
  Choose Plan
</button>

    </div>
  );
};

export default PriceCard;