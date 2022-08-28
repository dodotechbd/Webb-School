import React from "react";
import { Outlet, useParams } from "react-router-dom";
import CourseLink from "./CourseLink";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import primaryAxios from "../../Api/primaryAxios";
import AddReview from "./AddReview";

const CoursePlay = () => {
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
  const { data: language } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then((res) =>
      res.json()
    )
  );
  const { data: job } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then((res) =>
      res.json()
    )
  );
  const { data: admission } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  const allCourseData =
    admission?.find((allcard) => allcard.uname === uname) ||
    language?.find((allcard) => allcard.uname === uname) ||
    job?.find((allcard) => allcard.uname === uname);
  return (
    <div>
      {allCourseData?.meetLink?.MLink && (
        <div className="hidden lg:flex fixed flex-col top-[20%] left-1 ">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-5px] duration-300 bg-red-500 rounded">
              <a
                className="flex justify-between items-center hover:bg-red-500 w-full text-white font-bold"
                href={allCourseData?.meetLink?.MLink}
                target='blank'
              >
                LIVE CLASS<i className="fa-solid fa-video"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="hero bg-base-100 py-8">
        <div className="flex justify-center lg:w-full w-11/12 gap-10 flex-col-reverse lg:flex-row-reverse items-start">
          <div className="card rounded-md lg:w-96 w-full bg-base-200 border border-neutral">
            <div className="card-body p-0">
              <p className="text-lg p-3 border-b border-neutral">
                Course Lesson
              </p>
              {courseData?.file.map((course) => (
                <CourseLink key={course.id} course={course}></CourseLink>
              ))}
              {/* modal button  */}
              <label
                for="my-modal-5"
                className="text-center py-2 text-white rounded-none btn-block btn-primary cursor-pointer mx-auto mt-3"
              >
                Add a review
              </label>
              {/* modal box */}
              <input type="checkbox" id="my-modal-5" class="modal-toggle" />
              <label for="my-modal-5" class="modal cursor-pointer">
                <label class="modal-box relative p-0" for="">
                  <AddReview></AddReview>
                </label>
              </label>
            </div>
          </div>
          <div className="lg:w-7/12 w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlay;
