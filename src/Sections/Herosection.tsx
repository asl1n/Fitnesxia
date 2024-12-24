import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import heroImage from "../assets/img/heroImage.png";
import textImg from "../assets/img/textImg.png";

const Herosection: React.FC = () => {
  return (
    <div className=" relative bg-Aslin2 pt-10 md:pt-20 m-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between lg:w-[80%] px-3 lg:px-6">
        {/* Left Section */}
        <div className="md:w-1/2 lg:w-2/5 text-white text-center md:text-left space-y-6">
          {/* Texts */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            GET HEALTHY BODY WITH THE PERFECT EXERCISES
            <span className="inline-block align-middle ml-3">
              <img
                src={textImg}
                alt="Fitness"
                className="mt-4 w-24 h-12 md:w-36 rounded-full object-cover transform -translate-y-2"
              />
            </span>
          </h1>
          <p className="text-md leading-relaxed">
            We are always here to help you make a healthy body and mind through
            the power of fitness.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
            <button className="bg-[#FD2331] hover:bg-red-600 px-6 py-3 rounded-md shadow-lg font-semibold text-sm">
              Get Started
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-transparent rounded-lg">
              <div className="bg-gray-700 p-3 rounded-full flex justify-center items-center">
                <FaPlay className="text-white" />
              </div>
              <span className="text-white font-medium text-sm">
                Watch Video
              </span>
            </button>
          </div>

          {/* Info */}
          <div className="mt-8 py-4">
            <div className="container mx-auto w-[90%] grid grid-cols-3 gap-4 text-white text-center">
              <div>
                <h3 className="text-xl font-bold">105+</h3>
                <p className="text-gray-400 mt-1 text-sm">Expert Trainers</p>
              </div>
              <div className="border-l border-gray-700 border-r px-2">
                <h3 className="text-xl font-bold">970+</h3>
                <p className="text-gray-400 mt-1 text-sm">Members Joined</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">135+</h3>
                <p className="text-gray-400 mt-1 text-sm">Fitness Programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 lg:w-3/5 flex justify-center items-end mt-10 md:mt-0 relative">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto max-w-lg md:max-w-xl object-cover"
          />

          {/* Widget */}
          <div className="absolute top-[60%] sm:top-[70%] left-[10%] sm:left-[20%] bg-white p-4 rounded-lg shadow-lg flex ">
            <div className="flex flex-col">
              <p className="text-gray-500 font-medium text-[9px]">
                Today's Calories
              </p>
              <h2 className="text-black font-bold text-xl">150 Cal</h2>
              <p className="text-red-500 text-[9px] flex items-center mt-2">
                <IoIosTrendingUp className="w-4 h-4 mr-1" />
                +2.75%
                <span className="ml-1 text-gray-500 ">This Week</span>
              </p>
            </div>

            <div className="flex items-end space-x-1 ml-3">
              <div className="h-8 w-2 bg-[#FF6D37] rounded"></div>
              <div className="h-10 w-2 bg-[#FF6D37] rounded"></div>
              <div className="h-8 w-2 bg-[#FF6D37] rounded"></div>
              <div className="h-12 w-2 bg-[#FF6D37] rounded"></div>
              <div className="h-9 w-2 bg-[#FF6D37] rounded"></div>
            </div>
          </div>
          {/* End of Widget */}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
