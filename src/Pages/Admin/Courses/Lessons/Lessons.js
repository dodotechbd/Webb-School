import React, { useState } from "react";
import Add from "./Add";

const Lessons = ({ lessons, setLessons }) => {
  const [showLesson, setShowLesson] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const onSubmit = (data) => {
    setLessons((prev) => {
      if (!prev) {
        return [data];
      }
      const updatedLessons = prev.map((lesson) =>
        lesson.id === data.id ? data : lesson
      );
      if (!updatedLessons.some((lesson) => lesson.id === data.id)) {
        updatedLessons.push(data);
      }
      return updatedLessons;
    });
  };
  const handleDeleteLesson = (id) => {
    setLessons((prev) => prev.filter((item) => item.id !== id));
  };
  const closeModal = () => {
    setShowLesson(false);
    setSelectedLesson(null);
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
              <th align="right">Actions</th>
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
                    onClick={() => {
                      setShowLesson(true);
                      setSelectedLesson(item);
                    }}
                    className="btn btn-info btn-outline btn-xs mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteLesson(item.id)}
                    className="btn btn-error btn-outline btn-xs"
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
        close={closeModal}
        selectedLesson={selectedLesson}
      />
    </div>
  );
};

export default Lessons;
