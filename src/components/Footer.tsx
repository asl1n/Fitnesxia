import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  import { FiSend } from "react-icons/fi";
  import Logo from "./Logo";
  
  export default function Footer() {
    return (
      <footer className="bg-[#3A3B3F] py-7 px-3 md:px-6">
        <div className="Container mx-auto w-[90%] lg:w-[80%]">
          {/* Upper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 xl:text-left text-center">
            {/* Company */}
            <div className="hidden sm:block">
              <h3 className="font-semibold text-lg text-white mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  About Us
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Why us
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Security
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Partnership
                </li>
              </ul>
            </div>
  
            {/* Categories */}
            <div className="hidden sm:block">
              <h3 className="font-semibold text-lg text-white mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Basic Yoga
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Strength Training
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Body Building
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Weight Loss
                </li>
              </ul>
            </div>
  
            {/* Help */}
            <div className="hidden sm:block">
              <h3 className="font-semibold text-lg text-white mb-4">
                Help
              </h3>
              <ul className="space-y-2">
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Account
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Support Center
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Privacy Policy
                </li>
                <li className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  Terms & Conditions
                </li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg text-white mb-4">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center xl:justify-start font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  <FaPhoneAlt className="mr-2 text-[#FD2331] text-lg lg:text-xl" />{" "}
                  +1 (406) 555-0120
                </li>
                <li className="flex items-center justify-center xl:justify-start font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  <FaEnvelope className="mr-2 text-[#FD2331] text-lg lg:text-xl" />{" "}
                  example@email.com
                </li>
                <li className="flex items-center justify-center xl:justify-start font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white">
                  <FaMapMarkerAlt className="mr-2 text-[#FD2331] text-lg lg:text-xl" />{" "}
                  2464 Royal Ln. Mesa, NJ
                </li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div className="xl:col-span-1 col-span-full">
              <h3 className="font-semibold text-lg text-white mb-4">
                Subscribe Our Newsletter
              </h3>
              <div className="relative w-full max-w-[18rem] sm:max-w-[24rem] mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 px-3 pr-12 rounded-full bg-white text-black text-sm md:text-base w-full"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FD2331] p-2 rounded-full flex items-center justify-center"
                >
                  <FiSend className="text-white text-base md:text-lg" />
                </button>
              </div>
              <p className="font-thin text-base sm:text-xs lg:text-base leading-relaxed text-white mt-2 text-center xl:text-left">
                Never miss an update & news to your email.
              </p>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-500 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <div className="font-thin text-xs lg:text-base leading-relaxed text-gray-400">
              @2023 DesignAxen. All Copyrights reserved.
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-white text-lg lg:text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white text-lg lg:text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white text-lg lg:text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white text-lg lg:text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  