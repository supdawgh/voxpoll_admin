import React, { useContext } from "react";
import "../styles/candidateList.css";

import useSWR from "swr";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const NewEvents = () => {
  const { axiosins } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetcher = (url) => {
    return axiosins.get(url).then((res) => {
      return res.data;
    });
  };

  const {
    data: events,
    error,
    isLoading,
  } = useSWR("/admin/newEvents", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="candidate--list">
      <div className="list--header">
        <h2>New Events</h2>
      </div>
      <div className="list--container">
        {events.map((event) => (
          <div
            key={event._id}
            className="list"
            onClick={() => navigate(`/allevents/${event._id}`)}
          >
            <div className="candidate--details">
              <img src={event.eventBanner} alt={event.eventName}></img>
              <h2>{event.eventName}</h2>
            </div>
            <span>{format(event.createdAt, "PPP")}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewEvents;
