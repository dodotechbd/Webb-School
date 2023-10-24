import React, { useEffect, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { successToast } from "../../../../utils/utils";

const tableHead = [
  { id: 1, name: "Video Title", required: true },
  { id: 2, name: "Video URL", required: true },
];

const Add = ({ onSubmit, show, close }) => {
  const [videos, setVideos] = useState();
  const [title, setTitle] = useState("");
  const [refresh, setRefresh] = useState(false);

  const getEmptyValues = () => {
    const emptyValues = tableHead.map(() => "");
    return emptyValues;
  };

  const setValue = (value, row, column) => {
    setVideos((prevValues) => {
      const values = prevValues.map((arr) => arr.slice());
      if (!values[row]) values[row] = getEmptyValues();
      values[row][column] = value;
      return values;
    });
  };

  const handleChange = (value, row, column) => {
    const delimeters = ["|", "\t", "\n", "  ", ";"];
    let isCompleted = false;
    for (let i = 0; i < delimeters.length; i += 1) {
      if (value && value.includes(delimeters[i])) {
        const splits = value.split("\n");
        for (let j = 0; j < splits.length; j += 1) {
          const inputFileds = splits[j].split(delimeters[i]);
          const values = inputFileds.slice(0, tableHead.length - column);
          for (let k = 0; k < values.length; k += 1)
            setValue(values[k], row + j, column + k);
        }
        isCompleted = true;
        break;
      }
    }
    if (!isCompleted) setValue(value, row, column);
  };

  const handleSubmit = () => {
    let filterData = videos.filter((arr) => arr.join("").length !== 0);
    if (filterData.length === 0) {
      successToast("Please fill atleast one video data")
      return;
    }
    const data = {
      title,
      videos,
    };
    // onSubmit(data);
  };

  const remove = (index) => {
    if (videos.length === 1) return;
    const values = [...videos];
    values.splice(index, 1);
    setVideos(values);
  };

  const clear = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const initialInputs = getEmptyValues();
    setVideos([
      initialInputs,
      initialInputs,
      initialInputs,
      initialInputs,
      initialInputs,
    ]);
    setTitle("");
  }, [refresh]);

  useEffect(() => {
    const emptyRows = videos?.filter((arr) => arr.join("")?.length === 0);
    if (videos?.length !== 0 && emptyRows?.length === 0)
      setVideos([...videos, getEmptyValues()]);
  }, [videos]);

  if (show) {
    return (
      <div className="fixed z-50 w-screen h-screen top-0 left-right">
        <div className="modal-box p-0 bg-base-200 max-w-2xl w-full h-full">
          <div className="px-3 pt-3 pb-2 bg-info flex justify-between">
            <p className="text-xl text-white flex items-center gap-2">
              <IoCreateOutline size={24} /> Create Lesson
            </p>
            <button
              onClick={close}
              className="btn btn-sm btn-ghost text-white btn-square hover:bg-rose-600 "
            >
              ✕
            </button>
          </div>
          <div className="card-body w-full px-6 py-3">
            <div className="flex items-center gap-4">
              <label className="input-group input-group-sm">
                <span className="bg-info text-white uppercase">Title</span>
                <input
                  className="input bg-base-300 w-full"
                  placeholder="Enter Lesson Title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <button
                onClick={() => clear()}
                className="btn font-thin btn-info text-white hover:bg-green-600"
              >
                Clear
              </button>
              <button
                type="submit"
                disabled={!title}
                onClick={() => handleSubmit()}
                className="btn font-thin btn-success hover:bg-green-600"
              >
                Create <IoCreateOutline className="ml-2 text-lg" />
              </button>
            </div>
            <p className="px-4 py-2 text-sm text-gray-400">
              You can copy and paste whole rows and columns straight from Excel
              spreadsheets, Google Sheets etc.
            </p>
            <div className="overflow-x-auto w-full">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Index</th>
                    {tableHead.map((item) => (
                      <th key={item.id}>
                        {item.name}{" "}
                        {item.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </th>
                    ))}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((item, idx) => (
                    <VideoRow
                      key={idx}
                      item={item}
                      idx={idx}
                      removeItem={() => remove(idx)}
                      handleChange={handleChange}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Add;

const VideoRow = ({ removeItem, idx, item, handleChange }) => {
  return (
    <tr>
      <td className="bg-base-300">{idx + 1}</td>
      <td className="bg-base-300">
        <textarea
          className="bg-white/0 h-6 outline-none px-2 resize-none placeholder:italic overflow-hidden"
          value={item[0]}
          onChange={(e) => handleChange(e.target.value, idx, 0)}
          placeholder="Video Title"
        />
      </td>
      <td className="bg-base-300">
        <textarea
          className="bg-white/0 h-6 outline-none px-2 resize-none placeholder:italic overflow-hidden"
          value={item[1]}
          onChange={(e) => handleChange(e.target.value, idx, 1)}
          placeholder="Video URL"
        />
      </td>
      <td className="bg-base-300">
        <button onClick={removeItem}>
          <button className="btn btn-xs btn-error text-base-200">Delete</button>
        </button>
      </td>
    </tr>
  );
};
