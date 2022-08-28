import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Admission from './Admission';
import Job from './Job';
import LanguagesTable from './LanguagesTable';



const Live = () => {


    const { data: language, refetch,isLoading } = useQuery(["languageCourse"], () =>
        fetch(`http://localhost:5000/language`).then((res) =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>;
      }

    return (
        <div className=''>


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
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
                                isLoading={isLoading}
                            ></LanguagesTable>)
                        }
                    </tbody>
                         <Job></Job>
                         <Admission></Admission>

                   </table>

            </div>
        </div>
    );
};

export default Live;
