import React from 'react';
import useLives from '../../../Hooks/UseLIve';
import PostClass from './PostClass';


const Live = () => {

    
    const [Lives] = useLives();

    
 


    return (
        <div>
            <div className="hero bg-base-100">
                <div className="">
                    <div className="text-center my-10">
                        <h1 className="text-3xl font-bold">Post Live Class {Lives.length}  <i className="fa-solid fa-video text-error"></i></h1>
                    </div>
                    <div className="card flex-shrink-0 w-80 md:w-96 lg:w-96 max-w-sm shadow-2xl bg-base-200 border border-neutral">
                        {
                            Lives.map(live=><PostClass
                            key={live._id}
                            live={live}
                            ></PostClass>)
                        }
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Live;