import React from "react";

interface ProgramCardProps {
  icon: React.ReactNode; 
  title: string;         
  description: string;   
  link: string;          
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div
      className="rounded-lg p-6 shadow-md bg-[#464646] text-white
                 hover:bg-[#FF662D] hover:text-white transition-all duration-300"
    >
      <div className="text-6xl mb-4 mx-auto">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm font-thin py-4">{description}</p>
      <a
        href={link}
        className="font-thin text-white no-underline"
      >
        Learn More <span className="ml-1">&rarr;</span>
      </a>
    </div>
  );
};

export default ProgramCard;