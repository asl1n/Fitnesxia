import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";

export default function Partners() {
  return (
    <div className="bg-[#37383c] py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between lg:w-[80%] px-3 lg:px-6">
        {/* Left Side */}
        <div className="md:w-2/5 text-white text-center md:text-left">
          <h1 className="text-3xl leading-tight font-bold">970K+ More</h1>
          <p className="text-lg leading-relaxed">Trusted Companies Partner</p>
        </div>

        {/* Right Side */}
        <div className="md:w-3/5 flex flex-col md:flex-row sm:justify-around items-center mt-4 md:mt-0 space-y-4 md:space-y-0">
          <img
            src={p1}
            alt="Partner 1 Logo"
            className="sm:w-[33%] h-14 object-contain"
          />
          <img
            src={p2}
            alt="Partner 2 Logo"
            className="sm:w-[33%] h-14 object-contain"
          />
          <img
            src={p3}
            alt="Partner 3 Logo"
            className="sm:w-[33%] h-14 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
