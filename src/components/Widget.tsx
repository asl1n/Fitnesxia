import React from "react";
import { IconType } from "react-icons";

interface WidgetProps {
  icon: IconType;
  text: React.ReactNode;
  iconColor: string;
  textColor?: string;
}

const Widget: React.FC<WidgetProps> = ({
  text,
  icon: Icon,
  iconColor,
  textColor,
}) => {
  return (
    <div className="bg-white px-5 py-2 rounded-lg flex items-center shadow-lg space-x-3">
      {/* Icon Section */}
      <span className="text-3xl" style={{ color: iconColor }}>
        <Icon />
      </span>
      {/* Text Section */}
      <div style={{ color: textColor, lineHeight: "1", padding: "0" }}>
        {text}
      </div>
    </div>
  );
};

export default Widget;
