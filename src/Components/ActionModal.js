import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {
  MdBlock,
  MdFolderSpecial,
  MdOutlineDeleteOutline
} from "react-icons/md";

const ActionModal = ({
  title,
  open,
  cancel,
  remove,
  success,
  loading,
  special,
  onSpecial,
  added,
}) => {
  return (
    <>
      {open && (
        <div className="fixed z-50 w-full h-full flex items-center justify-center top-0 left-0">
          <div className="w-96 bg-base-300 pt-6 rounded-3xl">
            <div className="flex justify-center">
              <div className="px-5 py-4 rounded-2xl bg-[#EF4444]/10">
                <MdOutlineDeleteOutline size={40} className="fill-[#EF4444]" />
              </div>
            </div>
            <h1 className="text-xl py-4 px-4">
              Are you sure want to delete
              <span className="text-orange-500"> {title || "this item"}</span>?
            </h1>
            <p className="text-sm max-w-xs mx-auto pb-4 opacity-80">
              This action is final and you will be unable to recover any data
            </p>
            <div className="flex text-white">
              <button
                type="button"
                onClick={remove}
                className="w-full bg-red-500 hover:bg-red-500/80 py-2 text-lg rounded-bl-3xl"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={cancel}
                className="w-full bg-primary hover:bg-primary/80 py-2 text-lg rounded-br-3xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {special && (
        <div className="fixed z-50 w-full h-full flex items-center justify-center top-0 left-0">
          <div className="w-96 bg-base-300 pt-6 rounded-3xl">
            <div className="flex justify-center">
              <div className="px-5 py-4 rounded-2xl bg-secondary/10">
                <MdFolderSpecial size={40} className="fill-secondary" />
              </div>
            </div>
            <h1 className="text-xl py-4 px-4">
              Are you sure want to add
              <span className="text-secondary"> {title || "this item"} </span>
              to special?
            </h1>
            <p className="text-sm max-w-xs mx-auto pb-4 opacity-80">
              This action will add this course to the special courses
            </p>
            <div className="flex text-white">
              <button
                type="button"
                onClick={onSpecial}
                className="w-full bg-primary hover:bg-primary/80 py-2 text-lg rounded-bl-3xl"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={cancel}
                className="w-full bg-red-500 hover:bg-red-500/80 py-2 text-lg rounded-br-3xl"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {success && (
        <div className="fixed z-50 w-full h-full flex items-center justify-center top-0 left-0">
          <div className="w-96 bg-base-300 pt-6 rounded-3xl">
            <div className="flex justify-center">
              <div className="px-5 py-4 rounded-2xl bg-[#22C55E]/10">
                <BsFillPatchCheckFill size={40} className="fill-[#22C55E]" />
              </div>
            </div>
            <h1 className="text-xl py-4 px-4">
              Successfully Deleted
              <span className="text-[#22C55E]"> {title || "this item"}</span>!
            </h1>
            <button
              type="button"
              onClick={cancel}
              className="w-full bg-primary hover:bg-primary/80 py-2 text-lg rounded-b-3xl text-white"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {added && (
        <div className="fixed z-50 w-full h-full flex items-center justify-center top-0 left-0">
          <div className="w-96 bg-base-300 pt-6 rounded-3xl">
            <div className="flex justify-center">
              <div className="px-5 py-4 rounded-2xl bg-[#22C55E]/10">
                <BsFillPatchCheckFill size={40} className="fill-[#22C55E]" />
              </div>
            </div>
            <h1 className="text-xl py-4 px-4">
              Successfully added
              <span className="text-[#22C55E]"> {title || "this item"} </span>
              to special!
            </h1>
            <button
              type="button"
              onClick={cancel}
              className="w-full bg-primary hover:bg-primary/80 py-2 text-lg rounded-b-3xl text-white"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div className="fixed z-50 w-full h-full flex items-center justify-center top-0 left-0">
          <div className="w-96 bg-base-300 pt-6 rounded-3xl">
            <div className="flex justify-center">
              <div className="px-5 py-4 rounded-2xl bg-primary/10">
                <AiOutlineLoading3Quarters
                  size={40}
                  className="fill-primary animate-spin"
                />
              </div>
            </div>
            <h1 className="text-2xl py-4 px-4">Deleting...</h1>
            <button
              type="button"
              className="w-full bg-primary/80 py-2 rounded-b-3xl"
            >
              <MdBlock size={25} className="mx-auto fill-red-500" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionModal;
