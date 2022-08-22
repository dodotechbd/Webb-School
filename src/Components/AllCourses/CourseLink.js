import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import primaryAxios from "../../Api/primaryAxios";

const CourseLink = ({ course }) => {
  const { uname } = useParams();
  const [user, loading] = useAuthState(auth);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
  primaryAxios.get(`/mycourse?email=${user?.email}`)
);
  const courseData = myCourse?.data?.find((allcard) => allcard.uname === uname);

    
  return (
    <>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border-b border-neutral mx-4"
      >
        <input type="checkbox"/>
        <div className="collapse-title text-lg font-medium">{course?.title}</div>
        <ul className="menu collapse-content">
          {course.details.map ((detail) => 
          <li>
          <NavLink
          to={`/course/${uname}/${courseData?.list}/${detail?.fileName}`}
            className="border-t border-neutral hover:rounded-none"
          >
            <p className="text-md">
              <i className="fa-solid fa-circle-play mr-2"></i>
              {detail?.name}
            </p>
          </NavLink>
        </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default CourseLink;
