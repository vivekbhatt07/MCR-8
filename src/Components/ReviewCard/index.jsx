import React from "react";

const ReviewCard = (props) => {
  const { rating, comment, revName, pp } = props;
  const ratingList = ["★✰✰✰✰", "★★✰✰✰", "★★★✰✰", "★★★★✰", "★★★★★"];
  return (
    <div className="flex justify-between items-center px-3 py-2 border border-stone-400 rounded-md">
      <div className="flex flex-col gap-3">
        {/* Bio */}
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src={pp} alt="review" className="w-full h-full object-cover" />
          </div>
          <span>{revName}</span>
        </div>
        {/* Description */}
        <p className="text-sm text-stone-500 font-normal">{comment}</p>
      </div>
      <span className="flex">
        {ratingList.find((currentRating, ratingIndex) => {
          return ratingIndex + 1 == rating;
        })}
      </span>
    </div>
  );
};

export default ReviewCard;
