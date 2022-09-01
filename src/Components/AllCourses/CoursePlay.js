import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import success from "../../Assets/success.svg";
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
  const stringProgress = progress.toString();
  const stringProgressp = progress.toString() + "%";

  const { data: userData } = useQuery(["userProfile", user?.email], () =>
    primaryAxios.get(`/user-role?email=${user?.email}`)
  );
  console.log();
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
              <div className="px-5 flex flex-col gap-2 text-warning font-bold">
                <p>
                  {myCourseData?.progress?.length
                    ? myCourseData?.progress?.length
                    : "0"}
                  /{courseData?.videos?.length} Module Completed - Progress{" "}
                  {progress ? stringProgress.slice(0, 4) : "0"}%
                </p>
                <div>
                  {progress > 0 ? (
                    <div className="bg-neutral rounded-full h-2.5">
                      <div
                        className={`bg-[#3EC65D] h-2.5 rounded-full`}
                        style={{
                          width: `${stringProgressp}`,
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
            </div>
            <div>
              {progress === 100 && (
                <>
                  <div>
                    <label
                      htmlFor="my-modal-4"
                      className="text-center py-2 text-accent border-t border-neutral hover:bg-info hover:text-base-100 rounded-none inline-block
                    btn-block btn-ghost uppercase cursor-pointer mx-auto"
                    >
                      Course Summary
                    </label>
                    <input
                      type="checkbox"
                      id="my-modal-4"
                      className="modal-toggle"
                    />
                    <label
                      htmlFor="my-modal-4"
                      className="modal cursor-pointer"
                    >
                      <label
                        className="modal-box rounded-lg border border-neutral relative p-0"
                        htmlFor=""
                      >
                        <div className="card bg-base-100">
                          <div className="card-body">
                            <label
                              htmlFor="my-modal-4"
                              className="btn btn-sm btn-ghost text-primary btn-square absolute right-2 top-2 hover:bg-red-600 hover:text-white"
                            >
                              ✕
                            </label>
                            <div>
                              <p className="text-2xl">
                                Congratulations !{" "}
                                <span className="text-info font-mono">
                                  {userData?.data?.name}
                                </span>
                                ,
                              </p>
                              <img
                                src={success}
                                className="w-32 mx-auto h-32"
                                alt="success"
                              />
                              <p className="text-xl text-info mb-4 text-center">
                                You Are Successfully Completed The Course
                              </p>
                              <div className="flex bg-base-200 p-4 rounded-lg flex-col gap-2 font-bold">
                                <p>
                                  {myCourseData?.progress?.length
                                    ? myCourseData?.progress?.length
                                    : "0"}
                                  /{courseData?.videos?.length} Module Completed
                                  - Progress {progress ? progress : "0"}%
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
                            </div>
                          </div>
                        </div>
                      </label>
                    </label>
                    <label
                      htmlFor="my-modal-5"
                      className="text-center py-2 uppercase rounded-none inline-block
                    btn-block hover:bg-secondary text-info hover:text-base-100 cursor-pointer mx-auto"
                    >
                      Add A Review
                    </label>
                    {/* modal box */}
                    <input
                      type="checkbox"
                      id="my-modal-5"
                      className="modal-toggle"
                    />
                    <label
                      htmlFor="my-modal-5"
                      className="modal cursor-pointer"
                    >
                      <label
                        className="modal-box rounded-lg border border-neutral relative p-0"
                        htmlFor=""
                      >
                        <div className="card bg-base-100">
                          <label
                            htmlFor="my-modal-5"
                            className="btn btn-sm btn-ghost text-primary btn-square absolute right-2 top-2 hover:bg-red-600 hover:text-white"
                          >
                            ✕
                          </label>
                          <AddReview></AddReview>
                          <div>
                            <span class="flex h-3 w-3">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                          </div>
                        </div>
                      </label>
                    </label>
                  </div>
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
