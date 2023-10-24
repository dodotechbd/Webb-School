import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Profile } from "../../Assets/user.svg";
const UserRow = ({ user, refetch, index }) => {
  const { name, email, role, _id, image } = user;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

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
            <Link to={`${email}`} className="font-bold hover:underline">
              {name}
            </Link>
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
      </td>
      <td>
        <Link
          to={`${email}`}
          className="btn btn-xs btn-outline btn-secondary hover:text-white"
        >
          Visit Profile
        </Link>
      </td>
    </tr>
  );
};

export default UserRow;
