import React from "react";
import HowItWorkCard from "./HowItWorkCard";

const HowItWork = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        How it works
      </h1>

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <HowItWorkCard
            num="01"
            image="/images/kiosk.png"
            title="Choose Your Meal"
            description="Browse our wide selection of delicious meals and pick your favorites."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <HowItWorkCard
            num="02"
            image="/images/phone.png"
            title="Place Your Order"
            description="Order easily through our website or app in just a few clicks."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <HowItWorkCard
            num="03"    
            image="/images/van.jpg"
            title="Enjoy Your Delivery"
            description="Sit back, relax, and enjoy your freshly prepared meal delivered to your door."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
