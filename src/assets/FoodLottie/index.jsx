import React from "react";
import Lottie from "lottie-react";
import foodLottie from "./food.json";

const FoodLottie = () => (
  <div className="w-[150px ] lg:w-[500px]">
    <Lottie animationData={foodLottie} loop={true} />
  </div>
);

export default FoodLottie;
