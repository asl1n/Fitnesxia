import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="flex items-center font-semibold text-lg text-white">
        <span className="flex items-center justify-center bg-orange-600 text-white w-5 h-5 rounded-full mr-2">
          <FiCheck className="text-sm" />
        </span>
        {title}
      </h3>
      <p className="font-thin text-xs lg:text-base leading-relaxed text-white">
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;