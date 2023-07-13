import React from "react";
import moment from "moment";

const Card = (props) => {
  // const {
  //   id,
  //   title,
  //   eventStartTime,
  //   eventEndTime,
  //   location,
  //   address,
  //   eventThumbnail,
  //   eventDescription,
  //   hostedBy,
  //   eventType,
  //   isPaid,
  //   eventTags,
  //   speakers,
  //   price,
  //   additionalInformation,
  // } = props;

  const convertStartDate = moment(props.eventStartTime)
    .utc()
    .format("YYYY-MM-DD");
  const convertEndDate = moment(props.eventEndTime).utc().format("YYYY-MM-DD");
  return (
    <div className="flex flex-col min-w-[250px] max-w-[250px] border border-stone-400 rounded-sm items-stretch">
      <div className="h-[200px] relative">
        <img
          src={props?.eventThumbnail}
          alt={props?.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute bg-stone-50 px-2 py-1 top-[8px] left-[8px] rounded-md">
          {props?.eventType}
        </span>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="text-2xl">{props?.title}</h3>
        <div className="flex justify-between">
          <span className="font-normal text-stone-400">{convertStartDate}</span>
          <span className="font-normal text-stone-400">{convertEndDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
