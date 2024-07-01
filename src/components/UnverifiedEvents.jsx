import React, { useContext } from "react";
import "../styles/candidateList.css";

import useSWR from "swr";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UnverifiedEvents = () => {
  const navigate = useNavigate();
  const { axiosins } = useContext(AuthContext);

  const fetcher = (url) => {
    return axiosins.get(url).then((res) => {
      return res.data;
    });
  };

  const {
    data: events,
    error,
    isLoading,
  } = useSWR("/admin/unverified", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="candidate--list">
      <div className="list--header">
        <h2>Unverified Events</h2>
      </div>
      <div className="list--container">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event._id}
              className="list"
              onClick={() => navigate(`/unverified/${event._id}`)}
            >
              <div className="candidate--details">
                <img src={event.eventBanner} alt={event.eventName}></img>
                <h2>{event.eventName}</h2>
              </div>
              <span>{event.eventStatus}</span>
            </div>
          ))
        ) : (
          <div>No Unverified Events</div>
        )}
      </div>
    </div>
  );
};

export default UnverifiedEvents;
