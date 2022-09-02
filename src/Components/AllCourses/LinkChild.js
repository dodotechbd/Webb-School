import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";

const LinkChild = ({ detail, allCourseData, uname, myCourseData, refetch }) => {
  const { _id } = myCourseData;
  const [loading, setLoading] = useState(false);
  let activeClassName = "bg-base-300";
  const progress = myCourseData?.progress?.find(
    (s) => s.i === detail?.fileName
  );
  // const finish = progress?.i === detail?.fileName
  const handleStatus = (_id) => {
    if (!progress) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      (async () => {
        const { data } = await primaryAxios.put(`/mycourse/${_id}`, {
          i: detail?.fileName,
          // progress: {i: detail?.fileName} + {i: myCourseData?.progress?.i}
        });
        if (data.success) {
          refetch();
        }
      })({ once: true });
    } else {
      refetch();
    }
  };
  return (
    <>
      {loading ? (
        <a
          className="border-t border-neutral text-warning"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <i className="fa-solid text-xl text-info fa-circle-play"></i>
          <p>{detail?.name}</p>
          {progress ? (
            <i class="fa-solid fa-circle-check text-green-500"></i>
          ) : (
            <i class="fa-solid fa-lock"></i>
          )}
        </a>
      ) : (
        <NavLink
          onClick={() => handleStatus(_id)}
          to={`/course/${uname}/${allCourseData?.list}/${detail?.fileName}`}
          className="border-t border-neutral text-warning"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <i className="fa-solid text-xl text-info fa-circle-play"></i>
          <p>{detail?.name}</p>
          {progress ? (
            <i class="fa-solid fa-circle-check text-green-500"></i>
          ) : (
            <i class="fa-solid fa-lock"></i>
          )}
        </NavLink>
      )}
    </>
  );
};

export default LinkChild;
