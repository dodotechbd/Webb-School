import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";
import useMessage from "../../Hooks/useMessage";

const SendMessage = ({ name, email, send, back, history, header }) => {
  const { register, handleSubmit, reset } = useForm({});
  const [message, isLoading, refetch] = useMessage();
  const userMessageData = message?.data?.filter(
    (allcard) => allcard.email === email
  );
  const onSubmit = (data) => {
    const newReview = {
      ...data,
      email: email,
    };
    (async () => {
      const { data } = await primaryAxios.post(`/message`, newReview);
      if (data.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "green",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1000,
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
  const handleDelete = (id) => {
    (async () => {
      const { data } = await primaryAxios.delete(`/message/${id}`);
      if (data.deletedCount > 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "green",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });
        await Toast.fire({
          icon: "success",
          title: "deleted",
        });
        refetch();
      }
    })();
  };
  if (isLoading) {
    return <div className="w-full h-full bg-base-100" id="preloaders"></div>;
  }
  return (
    <div>
      {send && (
        <div className="fixed z-30 w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-box p-0">
            <div className="px-3 pt-3 pb-2 bg-primary flex justify-between">
              <p className="text-xl text-white">
                <i className="fa-solid fa-bell mr-2"></i> Send Message
              </p>
              <label
                onClick={back}
                className="btn btn-sm btn-ghost hover:bg-red-600 text-white btn-square"
              >
                ✕
              </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body px-6 py-3">
                <h2 className="text-lg">
                  <p>
                    <span className="ml-1 font-bold">{name}</span>
                  </p>
                  <p className="badge">{email}</p>
                </h2>
                <div className="form-control">
                  <label className="input-group input-group-sm">
                    <span className="bg-primary text-white uppercase">
                      Subject
                    </span>
                    <input
                      {...register(`title`)}
                      type="text"
                      placeholder="Subject here"
                      className="input bg-base-300 input-sm w-full"
                    />
                  </label>
                </div>
                <textarea
                  {...register(`details`)}
                  className="textarea textarea-bordered"
                  placeholder="Type here..."
                ></textarea>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn font-thin btn-sm btn-primary"
                  >
                    <i className="fa-solid fa-paper-plane mr-1"></i>Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {history && (
        <div className="fixed z-30 w-full h-full left-0 top-0 flex items-center justify-center">
          <div className="modal-box p-0">
            <div className="px-3 pt-3 pb-2 bg-primary flex justify-between">
              <p className="text-xl text-white">
                <i className="fa-solid fa-bell mr-2"></i> All Messages
              </p>
              <label
                onClick={back}
                className="btn btn-sm btn-ghost  hover:bg-red-600 text-white btn-square"
              >
                ✕
              </label>
            </div>
            <div>
              <div className="card-body px-6 py-3">
                <h2 className="text-lg">
                  <span className="ml-1 font-bold">{name}</span>
                  <span className="ml-2 badge">{email}</span>
                </h2>
                <div className="rounded-md">
                  {userMessageData?.length === 0 && (
                    <div className="py-8 text-center bg-neutral rounded-md uppercase">
                      no Message here
                      <i className="ml-2 fa-solid fa-bell-slash"></i>
                    </div>
                  )}
                  {message?.data
                    ?.slice(0)
                    .reverse()
                    .map((message, index) => (
                      <div>
                        {message?.email === email && (
                          <div className="card p-0 bg-neutral my-1 rounded-md">
                            <div className="card-body px-2 py-2 flex-row justify-between items-center">
                              <div>
                                <h2 className="text-lg font-bold">
                                  {message?.title}
                                </h2>
                                <p>{message?.details}</p>
                              </div>
                              <button
                                onClick={() => handleDelete(message?._id)}
                                className="btn btn-sm bg-base-300 btn-ghost text-red-500"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {header && (
        <div>
          {userMessageData?.length === 0 && (
            <div className="py-8 bg-base-200 text-center uppercase">
              no message here <i className="fa-solid fa-bell-slash"></i>
            </div>
          )}
          {userMessageData
            ?.slice(0)
            .reverse()
            .map((message, index) => (
              <div>
                {message?.email === email && (
                  <div className="card p-0 bg-neutral my-1 rounded-md">
                    <div className="card-body px-2 py-2 flex-row justify-between items-center">
                      <div>
                        <h2 className="text-lg font-bold">{message?.title}</h2>
                        <p>{message?.details}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(message?._id)}
                        className="btn btn-sm bg-base-300 btn-ghost text-red-500"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SendMessage;
