import { useState } from "react";
import PriceCard from "../components/PriceCard";

const Price = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      title: "DISCOVER",
      priceMonthly: "$99",
      priceAnnual: "$1,000",
      features: [
        "5 classes per month",
        "4 group classes monthly",
        "Online class access",
        "E-book fitness guide",
      ],
    },
    {
      title: "ENTERPRISE",
      priceMonthly: "$299",
      priceAnnual: "$3,000",
      features: [
        "10 classes per month",
        "8 group classes monthly",
        "Online class access",
        "E-book fitness guide",
        "7 Extra fitness training",
      ],
    },
    {
      title: "PROFESSIONAL",
      priceMonthly: "$199",
      priceAnnual: "$2,000",
      features: [
        "7 classes per month",
        "6 group classes monthly",
        "Online class access",
        "E-book fitness guide",
      ],
    },
  ];

  return (
    <div className="bg-[#37383C] py-12">
      <div className="lg:w-[80%] mx-auto px-6">
        {/* Upper */}
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Choose The Best Plan
          </h1>
          <p className="font-thin text-xs lg:text-base leading-relaxed text-white mt-4">
            Choose a plan that's right for your growing team. Simple pricing & no hidden charges.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center items-center mt-6">
          <div className="flex bg-transparent border border-[#FD2331] rounded-full ">
            <button
              onClick={() => setIsMonthly(true)}
              className={`py-1 px-4 rounded-full font-thin text-sm text-white leading-relaxed transition ${
                isMonthly ? "bg-[#FD2331]" : "bg-transparent"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`py-1 px-4 rounded-full font-thin text-sm text-white leading-relaxed transition ${
                !isMonthly ? "bg-[#FD2331]" : "bg-transparent"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-6 lg:gap-8 mt-12 px-3 lg:px-0">
          {plans.map((plan, index) => (
            <div className="sm:w-[60%] sm:px-12 md:px-0 mx-auto md:w-full">
            <PriceCard
              key={index}
              title={plan.title}
              priceMonthly={plan.priceMonthly}
              priceAnnual={plan.priceAnnual}
              features={plan.features}
              isMonthly={isMonthly}
              isSelected={selectedPlan === plan.title}
              onSelect={() => setSelectedPlan(plan.title)}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;