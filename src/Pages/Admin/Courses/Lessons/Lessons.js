import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Add from "./Add";

const Lessons = ({ lessons, setLessons }) => {
  const [showLesson, setShowLesson] = useState(false);
  const onSubmit = (data) => {
    setLessons((prev) =>
      prev ? [...prev, { ...data, id: uuid() }] : [{ ...data, id: uuid() }]
    );
  };
  const handleDeleteUser = (userId) => {
    setLessons((prev) => prev.filter((item) => item.id !== userId));
  };
  return (
    <div className="mb-16">
      <div className={`overflow-x-auto mb-4 ${!lessons.length && "hidden"}`}>
        <table className="table w-full border-b border-neutral table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th align="center">Total Videos</th>
              <th align="right">Remove</th>
            </tr>
          </thead>
          <tbody>
            {lessons?.map((item, idx) => (
              <tr key={item.id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="font-bold">{item.title}</div>
                </td>
                <td align="center">{item.videos.length}</td>
                <td align="right">
                  <button
                    onClick={() => handleDeleteUser(item.id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => setShowLesson(true)}
        className="btn modal-button btn-sm btn-outline btn-info hover:text-white"
      >
        Add Lesson +
      </button>
      <Add
        onSubmit={onSubmit}
        show={showLesson}
        close={() => setShowLesson(false)}
      />
    </div>
  );
};

export default Lessons;
