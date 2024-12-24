import React from "react";
import { FaDumbbell, FaRunning } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";
import { GrYoga } from "react-icons/gr";
import ProgramCard from "../../components/ProgramCard";

const Programs: React.FC = () => {
  // CardItems
  const programs = [
    {
      icon: <FaDumbbell />,
      title: "Strength Training",
      description:
        "Our trainers will design progressive workout plans that properly achieve gains strength.",
      link: "#",
    },
    {
      icon: <GrYoga />,
      title: "Basic Yoga",
      description:
        "This program combines yoga with cardio & strength training to help lose weight & fitness.",
      link: "#",
    },
    {
      icon: <LuBicepsFlexed />,
      title: "Body Building",
      description:
        "For those looking to increase strength, build lean muscle, our strength & muscle.",
      link: "#",
    },
    {
      icon: <FaRunning />,
      title: "Weight Loss",
      description:
        "Our weight loss programs are designed to help you make sustainable lifestyle changes.",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#37383C] py-14">
      <div className="container mx-auto px-6 lg:w-[80%]">
        {/*Texts*/}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left md:justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight md:w-1/2 lg:pr-12">
            The Best Programs We Offer For You
          </h2>
          <p className="font-thin text-xs lg:text-base leading-relaxed text-white md:w-1/2 mt-4 md:mt-0">
            We offer a wide range of comprehensive fitness programs designed to
            cater to individuals of all fitness levels. Our aim is to help you
            achieve specific goals & maximize results.
          </p>
        </div>

        {/*Cards Section*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-0">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Programs;
