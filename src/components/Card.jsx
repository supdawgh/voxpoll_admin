import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import useSWR from "swr";

const Card = () => {
  const { axiosins } = useContext(AuthContext);

  const fetcher = (url) => {
    return axiosins.get(url).then((res) => {
      return res.data;
    });
  };

  const {
    data: count,
    error,
    isLoading,
  } = useSWR("/admin/eventCount", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const event = [
    {
      title: "Mic Drop",
      number: count.sing,
    },
    {
      title: "Dance Off",
      number: count.dance,
    },
    {
      title: "Art Attack",
      number: count.art,
    },
    {
      title: "Beauty Pageant",
      number: count.pageant,
    },
  ];

  return (
    <>
      <div>Total events in the system</div>
      <div className="card--container">
        {event.map((item, index) => (
          <div key={index} className="card">
            <div className="card--cover">{item.number}</div>
            <div className="card--title">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
