import React, { useState } from "react";
import primaryAxios from "../../../Api/primaryAxios";
import ActionModal from "../../../Components/ActionModal";

const LanguageCard = ({ allcard, refetch }) => {
  const { _id } = allcard;

  const [open, setOpen] = useState("");

  const deleteItems = (id) => {
    (async () => {
      setOpen("loading");
      const { data } = await primaryAxios.delete(`/language/${id}`);
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
  const handleAddToSpecial = (id) => {
    (async () => {
      const { data } = await primaryAxios.post(`/special`, {
        name: allcard?.name,
        uname: allcard?.uname,
        img: allcard?.img,
        instructor: allcard?.instructor,
      });
      if (data.success) {
        refetch();
      }
      setOpen("added");
    })();
  };
  return (
    <div className="mx-auto mt-3 card card-compact lg:w-48 w-10/12 bg-base-100 border rounded-md border-neutral">
      <figure>
        <img src={allcard?.img} alt="Shoes" className="lg:h-32 w-full" />
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
          <h2 className="text-left pl-1 py-1 text-md hover:text-info">
            {allcard?.name}
          </h2>
        )}
        <div>
          <button
            onClick={() => setOpen("special")}
            className="btn btn-block text-green-600 hover:bg-green-600 hover:text-base-100 rounded-none lg:btn-sm btn-ghost border-t-neutral"
          >
            Add To Special
          </button>
          <button
            onClick={() => setOpen("remove")}
            className="btn btn-block hover:bg-red-600 hover:text-base-100 text-red-600 rounded-none rounded-b-md btn-ghost border-t-neutral lg:btn-sm hover:rounded-b-md"
          >
            Delete Course
          </button>
        </div>
      </div>
      <ActionModal
        open={open === "remove"}
        special={open === "special"}
        success={open === "success"}
        added={open === "added"}
        loading={open === "loading"}
        onSpecial={() => handleAddToSpecial(_id)}
        remove={() => deleteItems(_id)}
        title={allcard?.name}
        cancel={() => setOpen("")}
      />
    </div>
  );
};

export default LanguageCard;
