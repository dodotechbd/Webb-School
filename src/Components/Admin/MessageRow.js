import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import MessageHistory from "./MessageHistory";

const MessageRow = ({ user, prefetch, index }) => {
  const { register, handleSubmit, reset } = useForm({});
  const { name, email, role, _id, image } = user;
  const {
    data: message,
    isLoading,
    refetch,
  } = useQuery(["message"], () => primaryAxios.get(`/message`));
  console.log(message?.data);

  const onSubmit = (data) => {
    const newReview = {
      ...data,
      email: email,
      // email: user?.email,
      // name: user?.displayName,
      // image: user?.photoURL,
    };
    console.log(data);
    (async () => {
      const { data } = await primaryAxios.post(`/message`, newReview);
      if (data.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        await Toast.fire({
          icon: "success",
          title: "Success",
        });
        reset();
        refetch();
      }
    })();
  };
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
                    : "https://im3.ezgif.com/tmp/ezgif-3-a85e333fe9.gif"
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
          for={_id}
          className="btn modal-button btn-xs btn-outline btn-primary hover:text-white"
        >
          Send Message
        </label>
        <input type="checkbox" id={_id} class="modal-toggle" />
        <div class="modal">
          <div class="modal-box p-0">
            <div className="px-3 pt-3 pb-2 bg-primary flex justify-between">
              <p className="text-xl text-white">
                <i class="fa-solid fa-paper-plane"></i> New Message
              </p>
              <label
                for={_id}
                class="btn btn-sm btn-ghost text-white btn-square"
              >
                ✕
              </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="card-body px-6 py-3">
                <h2 class="text-lg">
                  To <span className="ml-1 font-bold">{name}</span>
                  <span class="ml-2 badge">{email}</span>
                </h2>
                <div class="form-control">
                  <label class="input-group input-group-sm">
                    <span className="bg-primary text-white uppercase">
                      Subject
                    </span>
                    <input
                      {...register(`title`)}
                      type="text"
                      placeholder="Subject here"
                      class="input bg-base-300 input-sm w-full"
                    />
                  </label>
                </div>
                <textarea
                  {...register(`details`)}
                  class="textarea textarea-bordered"
                  placeholder="Type here..."
                ></textarea>
                <div class="card-actions justify-end">
                  <button
                    type="submit"
                    class="btn font-thin btn-sm btn-primary"
                  >
                    <i class="fa-solid fa-paper-plane mr-1"></i>Send
                  </button>
                </div>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </td>
      <td>
        <label
          for={email}
          className="btn modal-button btn-xs btn-outline btn-primary hover:text-white"
        >
          Message History
        </label>
        <input type="checkbox" id={email} class="modal-toggle" />
        <div class="modal">
          <div class="modal-box p-0">
            <div className="px-3 pt-3 pb-2 bg-primary flex justify-between">
              <p className="text-xl text-white">
                <i class="fa-solid fa-paper-plane"></i> All Messages
              </p>
              <label
                for={email}
                class="btn btn-sm btn-ghost text-white btn-square"
              >
                ✕
              </label>
            </div>
            <div>
              <div class="card-body px-6 py-3">
                <h2 class="text-lg">
                  <span className="ml-1 font-bold">{name}</span>
                  <span class="ml-2 badge">{email}</span>
                </h2>
                <div>
                  {message?.data?.slice(0).reverse().map((message, index) => (
                    <div>
                      {message?.email === email && 
                      <MessageHistory key={message?._id} message={message} refetch={refetch}></MessageHistory>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MessageRow;
