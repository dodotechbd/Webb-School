import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from "react-query";
import { NavLink, useParams } from 'react-router-dom';
import primaryAxios from '../../../../Api/primaryAxios';
import auth from '../../../../firebase.init';


const Demo = () => {
   
  
    const [user, loading] = useAuthState(auth);
    const {
      data: myCourse,
      isLoading,
      refetch,
    } = useQuery(["myCourses", user?.email], () =>
      primaryAxios.get(`/mycourse?email=${user?.email}`)
    );
    const courseData = myCourse?.data?.find((allcard) => allcard.uname );
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
      admission?.find((allcard) => allcard.uname ) ||
      language?.find((allcard) => allcard.uname ) ||
      job?.find((allcard) => allcard.uname);

      console.log('meeting'.allCourseData)
    return (

        <li>
            <NavLink className="hover:rounded-none" to={"liveclasses"}>
                {
                    allCourseData?.meetLink?.MLink ? ( <span class="animate-ping w-3.5 h-3.5 bg-green-700/75 rounded-full absolute -top-1 -right-1"></span>
                    ):<span></span>
                }

               
                Live Class
            </NavLink>
           
        </li>

    );
};

export default Demo;