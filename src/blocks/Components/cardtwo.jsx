import React from "react";

const SpotlightCard = ({ className, spotlightColor, title, buttonText }) => {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20 ${className}`}
      style={{ background: `linear-gradient(135deg, ${spotlightColor}, transparent)` }}
    >
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <button className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition">
        {buttonText}
      </button>
    </div>
  );
};

const cardTwo = () => {
  return (
    <div className="flex gap-6 p-6">
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.2)"
        title="Card One"
        buttonText="Click Me"
      />
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(255, 0, 229, 0.2)"
        title="Card Two"
        buttonText="Learn More"
      />
    </div>
  );
};

export default cardTwo;
