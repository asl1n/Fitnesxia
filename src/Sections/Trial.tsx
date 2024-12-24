import img from "../assets/img/Skipping.jpg";
import { GiWeightLiftingUp } from "react-icons/gi";
import Widget from "../components/Widget";

export default function Trial() {
  return (
    <div className="bg-[#3A3B3F] py-14">
      <div className="container mx-auto lg:w-[80%] flex flex-col md:flex-row items-center md:justify-between px-3 xl:px-6 md:space-x-3 xl:space-x-6">
        {/* Left */}
        <div className="relative w-full md:w-[65%] lg:w-1/2 flex justify-center md:justify-start">
          <img
            src={img}
            alt="Woman Working out"
            className="rounded-2xl w-full md:w-[90%] h-auto max-w-xl"
          />
          {/* Widget */}
          <div className="absolute bottom-2 sm:bottom-12 left-[40%] sm:left-[65%] xl:left-[70%] ">
            <Widget
              text={<>
              <span className="text-xs font-medium text-gray-700">Professional Trainer</span>
              </>}
              icon={GiWeightLiftingUp}
              iconColor="#FD6A36"
              textColor="#374151"
            />
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-[35%] lg:w-1/2  text-center md:text-left mt-8 md:mt-0 xl:pr-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Get Ready To Reach Your Fitness Goals
          </h2>
          <p className="font-thin text-xs lg:text-base leading-relaxed text-white mt-2 lg:mt-6">
            We are a gym that is committed to helping people reach their fitness
            goals. We offer a variety of programs and services to fit your
            needs, whether you are an experienced athlete.
          </p>
          <p className="font-thin text-xs lg:text-base leading-relaxed text-white mt-2 lg:mt-6">
            We believe that everyone should have access to the benefits of
            exercise to make it happen.
          </p>
          <button className="mt-6 bg-[#FD2331] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
            Free Trial Today
          </button>
        </div>
      </div>
    </div>
  );
}
