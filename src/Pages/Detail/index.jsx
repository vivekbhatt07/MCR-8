import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
  ContainedActionBtn,
  Header,
  ModalProvider,
  PageContainer,
  TextInput,
  TextInputLabel,
} from "../../Components";
import { useData } from "../../Context";
import { Chip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { state } = useData();
  const { eventId } = useParams();
  const getEvent = state.list.find((currentEvent) => {
    return currentEvent.id == eventId;
  });

  const convertStartDate = moment(getEvent?.eventStartTime)
    .utc()
    .format("YYYY-MM-DD");
  const convertEndDate = moment(getEvent?.eventEndTime)
    .utc()
    .format("YYYY-MM-DD");

  return (
    <PageContainer>
      <Header />
      <div className="flex mx-4 my-4 gap-6">
        <div className="flex flex-col basis-1/2 gap-6">
          {/* HEADER */}
          <div className="flex flex-col gap-4">
            <h3>{getEvent?.title}</h3>
            <div className="flex flex-col gap-2">
              <span>Hosted By:</span>
              <strong>{getEvent.hostedBy}</strong>
            </div>
          </div>
          {/* IMAGE */}
          <div>
            <img src={getEvent?.eventThumbnail} alt={getEvent?.title} />
          </div>
          {/* DETAILS */}
          <div className="flex flex-col gap-4">
            <h3>Details</h3>
            <p>{getEvent?.eventDescription}</p>
          </div>
          {/* ADDITIONAL */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <strong>Dress Code:</strong>
              <span>{getEvent?.additionalInformation?.dressCode}</span>
            </div>
            <div className="flex gap-2">
              <strong>Age Restrictions:</strong>
              <span>{getEvent?.additionalInformation?.ageRestrictions}</span>
            </div>
          </div>
          {/* EVENT */}
          <div className="flex flex-col gap-4">
            <h4>Event Tags</h4>
            <div className="flex gap-2 flex-wrap">
              {getEvent.eventTags.map((currentTag, index) => {
                return <Chip key={index} label={currentTag} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 items-center gap-6">
          <article className="flex flex-col gap-4 p-4 rounded-md border border-[#ddd] min-w-[380px]">
            <div className="flex gap-4 items-center">
              <AccessTimeIcon />
              <div className="flex flex-col">
                <span>{convertStartDate}</span>
                <span>{convertEndDate}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <LocationOnIcon />
              <div className="flex flex-col">
                <span>{getEvent?.location}</span>
                <span>{getEvent?.address}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <CurrencyRupeeIcon />
              <span>{getEvent?.price}</span>
            </div>
          </article>
          <div className="flex flex-col gap-2">
            <h3>Speakers: {getEvent?.speakers.length}</h3>
            <div className="flex flex-wrap gap-4">
              {getEvent?.speakers.map((currentSpeaker) => {
                return (
                  <article className="flex flex-col gap-2 p-4 rounded-md border border-[#ddd] items-center">
                    <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
                      <img
                        src={currentSpeaker.image}
                        alt={currentSpeaker.name}
                      />
                    </div>
                    <h4>{currentSpeaker.name}</h4>
                    <span>{currentSpeaker.designation}</span>
                  </article>
                );
              })}
            </div>
          </div>
          <ModalProvider
            isOpen={isOpen}
            closeModal={closeModal}
            modalTitle="Complete your RSVP"
            modalBtnVariant={
              <ContainedActionBtn handleClick={openModal}>
                RSVP
              </ContainedActionBtn>
            }
          >
            <div className="flex flex-col gap-4 p-4">
              <p>Fill in your personal information</p>
              <form className="flex flex-col gap-3">
                <TextInputLabel labelText="Label Text:">
                  <TextInput />
                </TextInputLabel>
                <TextInputLabel labelText="Email:">
                  <TextInput />
                </TextInputLabel>
              </form>
              <p>You have to make the payment at the venue.</p>
              <ContainedActionBtn>RSVP</ContainedActionBtn>
            </div>
          </ModalProvider>
        </div>
      </div>
    </PageContainer>
  );
};

export default Detail;
