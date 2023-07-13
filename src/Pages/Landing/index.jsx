import React, { useState } from "react";
import { PageContainer, Header, TextInputLabel, Card } from "../../Components";
import { useData } from "../../Context";

const Landing = () => {
  const { state, dispatch, eventList } = useData();
  const [sort, setSort] = useState("Both");
  return (
    <PageContainer>
      <Header />
      <div className="flex flex-col gap-14">
        <div className="flex justify-between px-4 py-3 items-center">
          <h3>Meetup Events</h3>
          <div>
            <select
              className="border border-[#ddd] p-3 rounded-md"
              onChange={(event) => {
                dispatch({ type: "SORT_TYPE", payload: event.target.value });
                setSort(event.target.value);
              }}
              value={state.sortBy}
            >
              <option value="Both">Select Event Type</option>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>
        </div>
        <ul className="flex flex-wrap gap-6 mx-4">
          {eventList.map((currentEvent) => {
            return (
              <li key={currentEvent.id}>
                <Card {...currentEvent} />
              </li>
            );
          })}
        </ul>
      </div>
    </PageContainer>
  );
};

export default Landing;
