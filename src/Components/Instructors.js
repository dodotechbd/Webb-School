import React from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import { v4 as uuid } from "uuid";

const Instructors = ({ instructors, setInstructors }) => {
  const { handleSubmit, register, watch, reset } = useForm();
  const image = watch("img");
  const name = watch("name");
  const onSubmit = (data) => {
    setInstructors((prev) => [...prev, { ...data, id: uuid() }]);
    reset();
  };
  const handleDeleteUser = (userId) => {
    setInstructors((prev) => prev.filter((item) => item.id !== userId));
  };
  return (
    <div className="mb-16">
      <div
        className={`overflow-x-auto mb-4 ${!instructors.length && "hidden"}`}
      >
        <table className="table w-full border-b border-neutral table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Job</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {instructors?.map((item, idx) => (
              <tr key={item.id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.address}</div>
                    </div>
                  </div>
                </td>
                <td>{item.job}</td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(item.id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <label
        htmlFor="add"
        className="btn modal-button btn-sm btn-outline btn-info hover:text-white"
      >
        Add Instructor +
      </label>
      <input type="checkbox" id="add" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0">
          <div className="px-3 pt-3 pb-2 bg-info flex justify-between">
            <p className="text-xl text-white flex items-center gap-2">
              <FaUserPlus /> Add Instructor
            </p>
            <label
              htmlFor="add"
              className="btn btn-sm btn-ghost text-white btn-square hover:bg-rose-600 "
            >
              ✕
            </label>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body px-6 py-3">
              <div className="flex items-center">
                <div className="px-1">
                  <div className="avatar ">
                    <div className="w-16 mask mask-squircle ">
                      <img
                        src={
                          image ||
                          "https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        }
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full font-semibold">
                  <p className=" text-info rounded-lg text-left whitespace-normal ">
                    <span className="uppercase  text-bold   ">
                      {name || "Instructor"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="form-control">
                <label className="input-group input-group-sm pt-2">
                  <span className="bg-info text-white uppercase">Name</span>
                  <input
                    className="input bg-base-300 input-sm w-full"
                    placeholder="Enter Instructor Name"
                    type="text"
                    {...register("name")}
                    required
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group input-group-sm pt-2">
                  <span className="bg-info text-white uppercase">Image</span>
                  <input
                    className="input bg-base-300 input-sm w-full"
                    placeholder="Instructor Image URL"
                    type="url"
                    {...register("img")}
                    required
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group input-group-sm pt-2">
                  <span className="bg-info text-white uppercase">Address</span>
                  <input
                    type="text"
                    placeholder="Address"
                    {...register("address")}
                    className="input bg-base-300 input-sm w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group input-group-sm pt-2">
                  <span className="bg-info text-white uppercase">Job</span>
                  <input
                    type="text"
                    placeholder="Job Title"
                    {...register("job")}
                    className="input bg-base-300 input-sm w-full"
                    required
                  />
                </label>
              </div>
              <div className="card-actions justify-end pt-3">
                <button
                  type="submit"
                  className="btn font-thin btn-sm btn-info text-white hover:bg-green-600"
                >
                  Add <FaUserPlus className="ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
