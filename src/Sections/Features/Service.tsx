import React from "react";
import ServiceItem from "../../components/ServiceItem";
import workout from "../../assets/img/Focus.png";
import { GiHeartBeats, GiFire } from "react-icons/gi";
import Widget from "../../components/Widget";

const Service: React.FC = () => {
  return (
    <div className="bg-[#3A3B3F] py-14">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between lg:w-[80%] px-3 lg:px-6">
        {/* Left Side */}
        <div className="md:w-1/2 items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Why Should People Choose Fitnessxia Services
          </h2>
          <div className="mt-6 space-y-6 text-left px-4">
            {/* Items */}
            <ServiceItem
              title="Personal Training"
              description="Our personal trainers can help you create a personalized fitness plan and track your progress."
            />
            <ServiceItem
              title="Expert Trainer"
              description="Our gym is proud to offer a team of highly skilled and certified trainers who help achieve your health & fitness goals."
            />
            <ServiceItem
              title="Flexible Time"
              description="There are many fitness classes that are offered during off-peak hours, such as early morning or late evening."
            />
          </div>
          {/* Button */}
          <div className="mt-6">
            <button className="bg-[#FD2331] hover:bg-red-600 px-6 py-3 rounded-md shadow-lg font-semibold text-sm text-white">
              Join Today
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-12 lg:mt-0 flex justify-center items-center relative">
          <img
            src={workout}
            alt="Fitness Training"
            className="w-full md:w-[90%] h-auto max-w-xl rounded-full"
          />
          {/* Widgets */}
          <div className="absolute top-10 right-10">
            <Widget
              text={
                <>
                  <span className="text-sm font-bold">70 bpm</span>
                  <br />
                  <span className="text-xs font-thin leading-tight">
                    Heart Rate
                  </span>
                </>
              }
              icon={GiHeartBeats}
              iconColor="#E53E3E"
              textColor="#1A202C"
            />
          </div>

          <div className="absolute bottom-10 left-10">
            <Widget
              text={
                <>
                  <span className="text-sm font-bold">24%</span>
                  <br />
                  <span className="text-xs font-thin leading-tight">
                    Flat Burning
                  </span>
                </>
              }
              icon={GiFire}
              iconColor="#FD6A36"
              textColor="#1A202C"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
