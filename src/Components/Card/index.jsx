import React from "react";

const Card = (props) => {
  const { name, imgSrc, price, qty, restaurantName } = props;
  return (
    <div className="flex flex-col min-w-[250px] max-w-[250px] border border-stone-400 rounded-sm">
      <div className="h-[200px]">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="text-2xl">{name}</h3>
        <span className="font-normal text-stone-400">
          Rs {price} for {qty}
        </span>
        <span className="font-normal text-stone-400">{restaurantName}</span>
      </div>
    </div>
  );
};

export default Card;
