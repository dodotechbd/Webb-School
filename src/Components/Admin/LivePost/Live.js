import { map } from '@firebase/util';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import useLives from '../../../Hooks/UseLIve';
import Loader from '../../Shared/Loading/Loading';
import LanguageCard from '../Courses/LanguageCard';
import AdmissionTable from './AdmissionTable';
import JobTable from './JobTable';
import LanguagesTable from './LanguagesTable';



const Live = () => {



    const { data: language } = useQuery(["languageCourse"], () =>
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
        fetch(`http://localhost:5000/admission/`).then(
            (res) => res.json()
        )
    );



    return (
        <div className=''>


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>Links</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            language.map((languages, index) => <LanguagesTable
                                key={languages._id}
                                languages={languages}
                                index={index}
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
                            ></AdmissionTable>)
                        }
                        

                    </tbody>
                    



                </table>

            </div>
        </div>
    );
};

export default Live;
