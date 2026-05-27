import { Zap, Utensils, ShieldCheck } from "lucide-react";
import React from "react";

const iconMap = {
  zap: Zap,
  utensils: Utensils,
  "shield-check": ShieldCheck,
};

const descriptions = {
  zap: "From the moment you order, we're on it. Your food arrives hot, fresh, and faster than you'd expect.",
  utensils: "Explore hundreds of meals from local restaurants breakfast, lunch, dinner, and everything in between.",
  "shield-check": "Your payments and personal data are always protected. Order with complete peace of mind.",
};

const FeatureCard = ({ icon, title }) => {
  const Icon = iconMap[icon];

  return (
    <div>
      <div className="flex justify-center">
        {Icon && <Icon className="w-12 h-12 text-pink-600" />}
      </div>
      <h1 className="mt-8 text-lg font-bold text-center">{title}</h1>
      <p className="text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3">
        {descriptions[icon]}
      </p>
    </div>
  );
};

export default FeatureCard;
