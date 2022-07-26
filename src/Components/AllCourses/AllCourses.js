import React from "react";
import useLanguage from "../../Hooks/useLanguage";
import useSkills from "../../Hooks/useSkills";
import AllCourseCard from "./AllCourseCard";

const AllCourses = () => {
  const [language] = useLanguage();
  const [skills] = useSkills();
  return (
    <div className="courses">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 text-black">Language Learning</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {language.slice(0, 4).map((allcard) => (
            <AllCourseCard key={allcard.id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
      <div className="lg:mx-8 mx-4 pt-10">
      <h1 className="text-3xl pb-5 text-black">Job Recruitment</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {skills.slice(0, 4).map((allcard) => (
            <AllCourseCard key={allcard.id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
