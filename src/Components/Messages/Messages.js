import React from "react";
import primaryAxios from "../../Api/primaryAxios";
import { useQuery } from "react-query";
import MessageHistory from "../Admin/MessageHistory";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Messages = () => {
  const [user, loading] = useAuthState(auth);
  const userEmail = user?.email;
  const { data: message } = useQuery(["message"], () =>
    primaryAxios.get(`/message`)
  );
  const { data: messageData } = useQuery(["messagedata"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/message`).then(
      (res) => res.json()
    )
  );
  const userMessageData = messageData?.filter((allcard) => allcard.email === userEmail);
  return (
    <div>
      {userMessageData?.length === 0 && (
        <div className="py-8 bg-base-200 text-center uppercase">
          no message here <i className="fa-solid fa-bell-slash"></i>
        </div>
      )}
      {message?.data
        ?.slice(0)
        .reverse()
        .map((message, index) => (
          <div>
            {message?.email === user?.email && (
              <MessageHistory
                key={message?._id}
                message={message}
              ></MessageHistory>
            )}
          </div>
        ))}
    </div>
  );
};

export default Messages;
