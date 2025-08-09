import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="pt-16 pb-16" id="features">
      <h1 className="text-xl ssm:text-2xl text-center font-extrabold">
        Meet our quality features
      </h1>

      <div className="w-[80%] mx-auto mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          dta-aos-delay="0"
        >
          <FeatureCard icon="/images/business.jpg" title="Business Analytics" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          dta-aos-delay="100"
        >
          <FeatureCard icon="/images/business.jpg" title="Customer Insights" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          dta-aos-delay="200"
        >
          <FeatureCard icon="/images/business.jpg" title="Real-time Reports" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
