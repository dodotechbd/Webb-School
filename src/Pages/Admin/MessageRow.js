import React, { useState } from "react";
import SendMessage from "./SendMessage";

const MessageRow = ({ user, prefetch, index }) => {
  const { name, email, image } = user;
  const [send, setSend] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`${
                  image
                    ? image
                    : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                }`}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <label
          onClick={() => setSend(true)}
          className="btn modal-button btn-xs btn-outline btn-primary hover:text-white"
        >
          Send
        </label>
        <SendMessage
          send={send}
          back={() => setSend(false)}
          email={email}
          name={name}
        />
      </td>
      <td>
        <label
          onClick={() => setHistory(true)}
          className="btn modal-button btn-xs btn-outline btn-primary hover:text-white"
        >
          History
        </label>
        <SendMessage
          history={history}
          back={() => setHistory(false)}
          email={email}
          name={name}
        />
      </td>
    </tr>
  );
};

export default MessageRow;
