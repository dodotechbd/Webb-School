import React from 'react';
import { useQuery } from 'react-query';
import JobTable from './JobTable';


const Job = () => {

    const { data: job, refetch } = useQuery(["jobCourse"], () =>
        fetch(`http://localhost:5000/job`).then((res) =>
            res.json()
        )
    );

    return (
        <div>


            {
                job.map((jobs, index) => <JobTable
                    key={jobs._id}
                    jobs={jobs}
                    index={index}
                    refetch={refetch}

                ></JobTable>)
            }

        </div>
    );
};

export default Job;