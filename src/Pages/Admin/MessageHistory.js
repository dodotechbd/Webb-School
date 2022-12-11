import React from "react";

const MessageHistory = ({ message, handleDelete }) => {
  return (
    <div className="card p-0 bg-neutral rounded-md">
      <div className="card-body px-2 py-2 flex-row justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{message?.title}</h2>
          <p>{message?.details}</p>
        </div>
        <button
          onClick={handleDelete}
          className="btn btn-sm bg-base-300 btn-ghost text-red-500"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageHistory;
