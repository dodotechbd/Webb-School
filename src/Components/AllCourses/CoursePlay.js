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
  return (
    <div>
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
                for="my-modal-3"
                className="text-center py-2 text-white rounded-none btn-block btn-primary cursor-pointer mx-auto mt-3"
              >
                Add a review
              </label>
              {/* modal box */}
              <input type="checkbox" id="my-modal-3" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box relative p-0">
                  <AddReview></AddReview>
                </div>
              </div>
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
