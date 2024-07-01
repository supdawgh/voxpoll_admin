import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useSWR, { mutate } from "swr";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

function NewAdmin() {
  const { axiosins } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fetcher = (url) => {
    return axiosins.get(url).then((res) => {
      return res.data;
    });
  };

  const { data: admins, error, isLoading } = useSWR(`/users/admins`, fetcher);

  const [showNewAdmin, setShowNewAdmin] = useState(false);

  const handleAddAdmin = async (data) => {
    try {
      const response = await axiosins.post("/register", {
        name: data.name,
        password: data.password,
        email: data.email,
        role: "admin",
      });

      if (response.status === 201) {
        toast.success("Admin added Successfully");
        reset();
        setShowNewAdmin(false);
        mutate("/users/admins");
      } else if (response.status === 409) {
        toast.error("Account Already Exists");
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.statusText);
      } else {
        const message = error.response?.data?.message("An error occurred");
        toast.error(message);
      }
    }
  };

  console.log(admins);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="content gap">
      <h1>Admins</h1>
      <div>
        {admins.map((admin) => {
          return (
            <div key={admin.id} className="admin">
              <div className="admin-info">
                <img
                  className="admin-photo"
                  src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${admin.name}`}
                  alt="admin"
                />
                <div>
                  <div>{admin.name}</div>
                  <div>{admin.email}</div>
                </div>
              </div>
              <div className="cross">Admin</div>
            </div>
          );
        })}
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setShowNewAdmin(true);
        }}
      >
        Add New
      </button>
      {showNewAdmin && (
        <form
          onSubmit={handleSubmit(handleAddAdmin)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2>New Admin</h2>
          <input
            style={{
              padding: "10px",
            }}
            type="text"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must contain only letters and spaces",
              },
            })}
            placeholder="Admin name"
          />
          {errors.name && (
            <p
              style={{
                color: "red",
              }}
            >
              {errors.name.message}
            </p>
          )}
          <input
            type="email"
            style={{
              padding: "10px",
            }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Admin email"
          />
          {errors.email && (
            <p
              style={{
                color: "red",
              }}
            >
              {errors.email.message}
            </p>
          )}
          <input
            type="password"
            style={{
              padding: "10px",
            }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Admin password"
          />
          {errors.password && (
            <p
              style={{
                color: "red",
              }}
            >
              {errors.password.message}
            </p>
          )}
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
}

export default NewAdmin;
