import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import AddTeacher from "./AddTeacher";
import { deleteTeacher } from "./TeacherSlice";
const TeacherView = () => {
  const teachers = useSelector((state) => state.teachersReducer.teachers);
  const dispatch = useDispatch();
  const handleDeleteTeacher = (id) => {
    dispatch(deleteTeacher(id));
  };
  return (
    <>
      <div class="overflow-x-auto">
        {/* <div> */}
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              {/* <th>Serial</th> */}
              <th>Image</th>
              <th>Job - Position</th>
              <th>Edit - Teacher</th>
              <th>Delete - Teacher</th>
            </tr>
          </thead>
          <tbody>
            {teachers &&
              teachers.map((book) => {
                const { id, name, image, email, job } = book;
                return (
                  <tr key={id}>
                    {/* <td>{id}</td> */}
                    <td>
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">{name}</div>
                          <div class="text-sm opacity-50">{email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{job}</td>
                    <td>
                      <Link
                        to="/admin/editteacher"
                        state={{ id, name, image, email, job }}
                      >
                        <button className="btn btn-xs btn-success">
                          <i class="fa-solid fa-pen-to-square"></i>
                          <span className="ml-1">Edit</span>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleDeleteTeacher(id);
                        }}
                        className="btn btn-xs btn-error text-base-100"
                      >
                        <i class="fa-solid fa-trash-can"></i>
                        <span className="ml-1">Delete</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <hr />
      </div>
      <label for="my-modal-6" class="btn modal-button">
        <i class="fa-solid fa-user-plus"></i>
        <span className="ml-2">Add New Teacher</span>
      </label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Please add new teacher !</h3>
          <AddTeacher></AddTeacher>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              <span className="mr-1">Exit</span>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherView;
