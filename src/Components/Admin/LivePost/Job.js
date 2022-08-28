import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import JobTable from './JobTable';


const Job = () => {

    const { data: job, refetch,isLoading} = useQuery(["jobCourse"], () =>
        fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then((res) =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>;
      }

    return (
        <tbody>


            {
                job.map((jobs, index) => <JobTable
                    key={jobs._id}
                    jobs={jobs}
                    index={index}
                    refetch={refetch}

                ></JobTable>)
            }

</tbody>
    );
};

export default Job;