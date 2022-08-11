import React from "react";
import swal from "sweetalert";
import axios from "axios";

const LanguageCard = ({ allcard, deleteItem, refetch }) => {
  const { _id } = allcard;

  const deleteItems = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once Deleted,This Process Can't Be Undone",
      icon: "warning",
      className: "rounded-xl",
      buttons: ["Cancle", "Yes, delete it!"],
      confirmButtonColor: "#000000",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        (async () => {
          const { data } = await axios.delete(
            `https://rocky-escarpment-87440.herokuapp.com/language/${id}`
          );
          if (data.deletedCount > 0) {
            swal("The course has been successfully deleted", {
              icon: "success",
              className: "rounded-xl",
            });

            refetch();
          }
        })();
      } else {
        swal("Action Canclled", {
          icon: "success",
          className: "rounded-xl",
        });
      }
    });
  };
  return (
    <div className="mx-auto mt-3 card card-compact lg:w-48 w-10/12 bg-base-100 border rounded-md border-neutral">
      <figure>
        <img src={allcard?.img} alt="Shoes" className="lg:h-28 w-full" />
      </figure>
      <div className="">
        <div className="px-2 pt-1 flex justify-between">
          <p className="text-md font-sans">{allcard?.instructor}</p>
          {allcard?.badge ? (
            <div className="badge badge-secondary">{allcard?.badge}</div>
          ) : (
            <></>
          )}
        </div>
        {allcard?.name.length >= 20 ? (
          <h2 className="text-left pl-1 py-1 text-md hover:text-info">
            {allcard?.name.slice(0, 20)}...
          </h2>
        ) : (
          <h2 className="text-left pl-1 py-1 text-md hover:text-info">{allcard?.name}</h2>
        )}
        <div>
          <button
            onClick={() => deleteItems(_id)}
            className="btn btn-block text-red-600 rounded-none rounded-b-md btn-ghost border-t-neutral"
          >
            Delete Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
