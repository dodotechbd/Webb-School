import React, { useState } from "react";
import primaryAxios from "../../../Api/primaryAxios";
import ActionModal from "../../../Components/ActionModal";

const SpecialCard = ({ allcard, refetch }) => {
  const { _id } = allcard;

  const [open, setOpen] = useState("");
  const deleteItems = (id) => {
    (async () => {
      setOpen("loading");
      const { data } = await primaryAxios.delete(`/special/${id}`);
      if (data.deletedCount > 0) {
        setOpen("success");
        setTimeout(
          () => {
            refetch();
          },
          open === "" ? 0 : 2000
        );
      }
    })();
  };
  return (
    <div className="mx-auto mt-3 card card-compact lg:w-48 w-10/12 bg-base-100 border rounded-md border-neutral">
      <figure>
        <img src={allcard?.img} alt="Shoes" className="lg:h-full w-full" />
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
        <h2 className="py-1 text-md hover:text-info text-left mx-1">
          {allcard?.name.slice(0, 18)}
        </h2>
        <div>
          <button
            onClick={() => setOpen("remove")}
            className="btn btn-block hover:bg-red-600 hover:text-white text-red-600 rounded-none rounded-b-md btn-ghost border-t-neutral btn-md hover:rounded-b-md"
          >
            Delete Course
          </button>
        </div>
      </div>
      <ActionModal
        open={open === "remove"}
        success={open === "success"}
        loading={open === "loading"}
        remove={() => deleteItems(_id)}
        title={allcard?.name}
        cancel={() => setOpen("")}
      />
    </div>
  );
};

export default SpecialCard;
