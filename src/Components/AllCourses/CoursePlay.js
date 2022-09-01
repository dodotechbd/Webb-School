import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import useCourse from "../../Hooks/useCourse";
import AddReview from "./AddReview";
import CourseLink from "./CourseLink";

const CoursePlay = () => {
  const { uname } = useParams();
  const [user, loading] = useAuthState(auth);
  const [courseData] = useCourse();
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  const myCourseData = myCourse?.data?.find(
    (allcard) => allcard.uname === uname
  );
  const progress =
    (myCourseData?.progress?.length / courseData?.videos?.length) * 100;
  const stringProgress = progress.toString() + "%";
  return (
    <div>
      {courseData?.meetLink?.MLink && (
        <div className="hidden lg:flex fixed flex-col top-[20%] left-1">
          <ul>
            <li className="w-[140px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-red-500 rounded">
              <a
                className="flex justify-between mx-3 items-center hover:bg-red-500 w-full text-white font-bold"
                href={courseData?.meetLink?.MLink}
                target="blank"
              >
                LIVE CLASS<i className="fa-solid fa-video"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="hero bg-base-100 py-8">
        <div className="flex justify-center lg:w-full w-11/12 gap-8 flex-col-reverse lg:flex-row-reverse items-start">
          <div className="card rounded-lg lg:w-96 w-full bg-base-200 border border-neutral">
            <div className="card-body p-0">
              <p className="text-lg p-3 border-b border-neutral">
                Course Lesson
              </p>
              <div className="px-4 flex flex-col gap-2 text-warning font-bold">
                <p>
                  {myCourseData?.progress?.length
                    ? myCourseData?.progress?.length
                    : "0"}
                  /{courseData?.videos?.length} Module Completed - Progress{" "}
                  {progress ? progress : "0"}%
                </p>
                <div>
                  {progress > 0 ? (
                    <div className="bg-neutral rounded-full h-2.5">
                      <div
                        className={`bg-[#3EC65D] h-2.5 rounded-full`}
                        style={{
                          width: `${stringProgress}`,
                          maxWidth: "100%",
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div className="bg-neutral rounded-full h-2.5">
                      <div
                        className={`bg-[#3EC65D] h-2.5 rounded-full`}
                        style={{
                          width: "0%",
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
              {myCourseData?.file.map((course) => (
                <CourseLink
                  key={course.id}
                  refetch={refetch}
                  course={course}
                  myCourseData={myCourseData}
                  allCourseData={courseData}
                ></CourseLink>
              ))}
              {/* modal button  */}
              {progress === 100 && (
                <>
                  <label
                    htmlFor="my-modal-5"
                    className="text-center py-2 text-white rounded-none btn-block btn-info cursor-pointer mx-auto mt-3"
                  >
                    Add a Review
                  </label>
                  {/* modal box */}
                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <label htmlFor="my-modal-5" className="modal cursor-pointer">
                    <label className="modal-box relative p-0" htmlFor="">
                      <AddReview></AddReview>
                    </label>
                  </label>
                </>
              )}
            </div>
          </div>
          <div className="lg:w-[640px] w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlay;
