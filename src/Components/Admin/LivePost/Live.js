import React from 'react';
import { useQuery } from 'react-query';
import useLives from '../../../Hooks/UseLIve';
import Loader from '../../Shared/Loading/Loading';
import LiveTable from './LiveTable';
import PostClass from './PostClass';


const Live = () => {
    const [Lives] = useLives();

    const { data: allData, isLoading, refetch } = useQuery(["lives"], () =>
        fetch(`https://rocky-escarpment-87440.herokuapp.com/lives`).then(
            (res) => res.json()

        )
    );
    if (isLoading) {
        return <Loader></Loader>;
    }

    return (
        <div className='flex flex-wrap gap-5 lg:flex-nowrap'>
            <div className="hero px-2 bg-base-10 pt-6 ">
                <div className='drop-shadow-2xl ring ring-blue-500 ring-offset-2 ring-offset-blue-100 rounded-2xl '>
                    <div className="text-center my-10">
                        <h1 className="text-3xl font-bold">Post Live Class<i className="fa-solid fa-video text-error"></i></h1>
                    </div>
                    <div className="card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-base-200 border border-neutral">
                        {
                            Lives.map(live => <PostClass
                                key={live._id}
                                live={live}
                            ></PostClass>)
                        }
                    </div>
                </div>
            </div>
            <div className="hero px-2 bg-base-100">
                <div class="overflow-x-auto drop-shadow-2xl ring ring-blue-500 ring-offset-2 ring-offset-blue-100 rounded-2xl " >
                    <h1 className='text-center font-bold pt-4 pb-2 '>Live Class {allData.length}  <i className="fa-solid fa-video text-error"></i> </h1>
                    <table class="table  card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-base-200 border border-neutral fixed-top" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Course</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.map((users, index) => <LiveTable
                                    key={users._key}
                                    index={index}
                                    users={users}
                                    refetch={refetch}
                                ></LiveTable>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Live;
