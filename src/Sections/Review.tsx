import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import userImage from "../assets/img/user.png";
import { FaPlus } from "react-icons/fa";

export default function Review() {
  return (
    <div className="bg-[#37383c] py-14">
      <div className="w-[80%] px-3 lg:px-6 mx-auto flex flex-col md:flex-row items-center text-center md:text-left justify-between space-x-6">
        {/*  Left Side */}
        <div className="w-full md:w-[45%]">
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            What Our Happy Clients Say About Us
          </h1>
          <p className="font-thin text-xs lg:text-base leading-relaxed text-white lg:py-4">
            I've been a member of Fitness Within for about 6 months now, and I
            absolutely love it! The trainers are so motivating and they really
            help to reach fitness goals.
          </p>

          {/* Users imgs */}
          <div className="flex items-center justify-center md:justify-start mt-6 space-x-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((_, index) => (
                <img
                  key={index}
                  src={userImage}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-gray-800"
                />
              ))}
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center border-2 border-gray-800 text-sm font-bold">
                <FaPlus />
              </div>
            </div>
            {/* Star */}
            <p className="text-yellow-400 flex items-center">
              <FaStar className="mr-1" /> 4.9 (450 Reviews)
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-[40%] mt-14 md:mt-0 md:ml-6">
          {/* Review Box */}
          <div className="bg-[#464646] p-6 rounded-lg shadow-lg relative">
            <div className="flex items-center mb-4">
              <img
                src={userImage}
                alt="Farhan Rio"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-lg text-white">Farhan Rio</h4>
                <p className="font-thin text-xs text-gray-400">
                  Happy Customer
                </p>
              </div>
            </div>
            {/* Stars */}
            <div className="flex mb-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
            </div>
            <p className="font-thin text-xs lg:text-base leading-relaxed text-white text-left">
              I've been coming to this gym for 3 years now, and I've never been
              in better shape. The trainers are amazing, and they always push me
              to be my best. I'm so glad to join this gym.
            </p>

            {/* Buttons */}
            <button className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-[#838282] hover:bg-red-500 w-9 h-9 rounded-full flex items-center justify-center">
              <FaArrowLeft className="text-white" />
            </button>
            <button className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-[#838282] hover:bg-red-500 w-9 h-9 rounded-full flex items-center justify-center">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
