import React, { useState } from "react";

const Developer = () => {

  return (
    <div className="py-10 min-h-screen bg-base-200">
      <p className="text-5xl font-bold mb-6 text-center text-primary">
        Mission 2022
      </p>
      <p className="text-2xl text-center text-gray-700">
        Endgamer's-Programming Hero(Batch 5)
      </p>
      <p className="text-xl font-bold text-center mt-6 text-primary">
        Tasmia Islam <br /> Shakhawth Hossain Shatu <br /> MD Badsha <br />{" "}
        Muhammad Shafi <br /> Rashel Mahomud <br /> Amortha Kumar Shill
      </p>
      <div className="text-2xl font-bold text-center mt-8">
      <p className="text-primary">primary</p>
      <p className="text-secondary">secondary</p>
      <p className="text-accent">accent</p>
      <p className="text-info">info</p>
      <p className="text-neutral">neutral</p>
      <p className="text-warning">warning</p>
      </div>
    </div>
  );
};

export default Developer;
