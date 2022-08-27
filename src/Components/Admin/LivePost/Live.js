import React from 'react';
import { useQuery } from 'react-query';
import Admission from './Admission';
import AdmissionTable from './AdmissionTable';
import Job from './Job';
import JobTable from './JobTable';
import LanguagesTable from './LanguagesTable';



const Live = () => {



    const { data: language, refetch } = useQuery(["languageCourse"], () =>
        fetch(`http://localhost:5000/language`).then((res) =>
            res.json()
        )

    );
    const { data: job } = useQuery(["jobCourse"], () =>
        fetch(`http://localhost:5000/job`).then((res) =>
            res.json()
        )
    );
    const { data: admission } = useQuery(["admissionCourses"], () =>
        fetch(`http://localhost:5000/admission`).then(
            (res) => res.json()
        )
    );




    return (
        <div className=''>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            language.map((languages, index) => <LanguagesTable
                                key={languages._id}
                                languages={languages}
                                index={index}
                                refetch={refetch}
                            ></LanguagesTable>)
                        }
                        {
                            job.map((jobs, index) => <JobTable
                                key={jobs._id}
                                jobs={jobs}
                                index={index}


                            ></JobTable>)
                        }
                        {
                            admission.map((admissions, index) => <AdmissionTable
                                key={admissions._id}
                                admissions={admissions}
                                index={index}
                                refetch={refetch}
                            ></AdmissionTable>)
                        }




                    </tbody>




                </table>

            </div>
        </div>
    );
};

export default Live;
