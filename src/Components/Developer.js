import React from "react";

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

      <label for="my-modal" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
