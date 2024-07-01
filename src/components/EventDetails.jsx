import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useSWR, { mutate } from "swr";
import { format } from "date-fns";
import { MdAppRegistration } from "react-icons/md";
import toast from "react-hot-toast";

const category = {
  sing: "Singing Competition",
  art: "Art Competition",
  dance: "Dance Competition",
  pageant: "Beauty Pageant",
};

function EventDetails() {
  const { id } = useParams();

  const { axiosins } = useContext(AuthContext);

  const fetcher = (url) => {
    return axiosins.get(url).then((res) => {
      return res.data;
    });
  };

  const { data: event, error, isLoading } = useSWR(`/admin/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="content gap">
      <h1 className="header--title">{event.eventName}</h1>
      <img style={{ width: "100%" }} src={event.eventBanner}></img>
      <h3>Status : {event.eventStatus}</h3>
      <h3>Type : {category[event.eventType]}</h3>
      <h3>
        Organizer : {event.author.name} / {event.author.email}
      </h3>
      <h3>Description : {event.eventDescription}</h3>
      <h3>Start Date : {format(event.eventStartDate, "PPP")}</h3>
      <h3>End Date : {format(event.eventEndDate, "PPP")}</h3>

      <h2>Candidates</h2>
      <div>
        {event.candidates.map((candidate) => {
          return (
            <div key={candidate._id} className="candidate">
              <div className="candiadte-info">
                <img className="candidate-photo" src={candidate.photo}></img>
                <div>
                  <div>{candidate.name}</div>
                  <div>{candidate.bio}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventDetails;
