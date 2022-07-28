import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAdmission from "../../Hooks/useAdmission";
import useJobCourses from "../../Hooks/useJobCourse";
import useLanguage from "../../Hooks/useLanguage";
import AllCourseCard from "../AllCourses/AllCourseCard";
import "./CoursesTab.css";


const CoursesTabs = () => {
  const [language] = useLanguage();
  const [jobcourses] = useJobCourses();
  const [admission] = useAdmission();
  return (
    <div className="hidden py-16 lg:block md:block bg-[#F7F8FA]">
      <div className="">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">
          Skill Development Courses
        </h1>
        <p className="lg:text-xl text-md mt-2 text-center text-indigo-400">
          Which skill will you develop today?
        </p>
      </div>
      <div>
        <Tabs className="mx-10 my-8 bg-[#F7F8FA]">
          <TabList>
            <Tab>Language Learning</Tab>
            <Tab>Jobs Requirments</Tab>
            <Tab>Admission Preparation</Tab>
          </TabList>

          <TabPanel className="mt-5 bg-[#F7F8FA]">
            <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
              {language.slice(0, 4).map((allcard) => (
                <AllCourseCard
                  key={allcard._id}
                  allcard={allcard}
                ></AllCourseCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
              {jobcourses.slice(0, 4).map((allcard) => (
                <AllCourseCard
                  key={allcard._id}
                  allcard={allcard}
                ></AllCourseCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {admission.slice(0, 4).map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesTabs;
