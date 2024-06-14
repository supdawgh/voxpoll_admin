import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

function UnverifiedDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { axiosins } = useContext(AuthContext);

  const fetcher = (url) => {
    return axiosins.get(url).then((res) => {
      return res.data;
    });
  };

  const { data: event, error, isLoading } = useSWR(`/admin/${id}`, fetcher);

  function handleApprove() {
    if (window.confirm("Are you sure?")) {
      axiosins.patch(`/admin/approve/${id}`).then(
        (response) => {
          toast.success("Event Approved");
          mutate(`/admin/${id}`);
          navigate(`/allevents/${id}`);
        },
        (error) => {
          toast.error("Something went wrong try again");
        }
      );
    }
  }

  function handleDecline() {
    if (window.confirm("Are you sure?")) {
      axiosins.patch(`/admin/decline/${id}`).then(
        (response) => {
          toast.success("Event Declined");
          mutate(`/admin/${id}`);
          navigate(`/allevents/${id}`);
        },
        (error) => {
          toast.error("Something went wrong try again");
        }
      );
    }
  }

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

      <div className="approve">
        <button onClick={handleDecline}>Decline</button>
        <button className="approve-btn" onClick={handleApprove}>
          Approve
        </button>
      </div>
    </div>
  );
}

export default UnverifiedDetails;
