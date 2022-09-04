import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const CourseSyllabus = ({ course }) => {
  const { uname } = useParams();
  const { data: language } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then(
      (res) => res.json()
    )
  );
  const { data: job } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then(
      (res) => res.json()
    )
  );
  const { data: admission } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  const courseData =
    admission?.find((allcard) => allcard.uname === uname) ||
    language?.find((allcard) => allcard.uname === uname) ||
    job?.find((allcard) => allcard.uname === uname);
  return (
    <>
    
      <div
        tabIndex="0"
        className="collapse collapse-arrow border-t border-neutral px-2"
      >
        <input type="checkbox" />
        <div className="collapse-title font-bold text-lg">{course?.title}</div>
        <ul className="menu collapse-content px-0">
          {course.details.map ((detail) =>
          <li key={detail.id}>
          <p
            className="border-t border-neutral hover:rounded-none"
          >
            <p className="text-md">
              <i className="fa-solid fa-play mr-2"></i>
              {detail?.fileName}
            </p>
          </p>
        </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default CourseSyllabus;
