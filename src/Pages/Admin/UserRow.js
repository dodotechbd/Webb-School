import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";
import { ReactComponent as Profile } from "../../Assets/user.svg";
const UserRow = ({ user, refetch, index }) => {
  const { name, email, role, _id, image } = user;
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const handleMakeAdmin = (id) => {
    setIsLoading(true);
    (async () => {
      const { data } = await primaryAxios.put(`/user-role?id=${id}`, {
        role: "admin",
      });
      if (data.success) {
        Swal.fire(`${name} Is Now Admin`, {
          icon: "success",
          className: "rounded-xl",
        });
        refetch();
        setIsLoading(false);
      }
    })();
  };
  const handleDelete = (id) => {
    setLoading(true);
    (async () => {
      const { data } = await primaryAxios.put(`/user-role?id=${id}`, {
        role: "",
      });
      if (data.success) {
        Swal.fire(`${name} Removed From Admin`, {
          icon: "success",
          className: "rounded-xl",
        });
        refetch();
        setLoading(false);
      }
    })();
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              {image ? (
                <img src={image} alt="Profile" />
              ) : (
                <div>
                  {name ? (
                    <div
                      style={{
                        backgroundColor: "#" + randomColor,
                      }}
                      className="text-xl h-12 flex items-center justify-center font-bold bg-[] font-sub text-base-100 uppercase"
                    >
                      <p className="mt-1">{name?.slice(0, 1)}</p>
                    </div>
                  ) : (
                    <Profile />
                  )}
                </div>
              )}
            </div>
          </div>
          <div>
            <Link to={`${email}`} className="font-bold hover:underline">{name}</Link>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <button
          className="btn btn-xs btn-outline btn-primary hover:text-white"
          disabled={!role}
        >
          {role ? "Admin" : "User"}
        </button>
        <button
          onClick={() => handleMakeAdmin(_id)}
          className={`btn btn-xs btn-outline btn-primary hover:text-white hidden ${
            isLoading && "loading"
          }`}
          disabled={role}
        >
          Make Admin
        </button>
      </td>
      <td>
        <Link to={`${email}`} className="btn btn-xs btn-outline btn-secondary hover:text-white">
          Visit Profile
        </Link>
        {email === "shahedali734@gmail.com" ||
        email === "shakhawathh55@gmail.com" ||
        email === "rashelmahmudraj1998@gmail.com" ||
        email === "amitsharma1998k@gmail.com" ? (
          <button className="btn btn-xs btn-secondary btn-outline hidden">
            Master Admin
          </button>
        ) : (
          <button
            onClick={() => handleDelete(_id)}
            className={`btn btn-xs btn-outline hidden ${loading && "loading"}`}
          >
            Remove Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
