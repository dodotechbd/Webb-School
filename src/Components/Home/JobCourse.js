import React from 'react';

const JobCourse = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Job Exam Preparation</h1>
            <h2 className='text-center text-base mb-10'>Which job are you preparing for?</h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-4  gap-16 px-12  bg-[#F7F8FA]'>
                <div class="card card-compact w-72 h-72 bg-base-100 shadow-xl  transform transition duration-500 hover:scale-110">
                    <figure><img src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BCS-Course-Thumbnail.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl text-center font-semibold">jobs</h2>
                        
                        <div class="card-actions justify-center">
                        <a href="#" class="bg-indigo-100 text-indigo-900 rounded-full py-3 px-8 shadow-md hover:shadow-xl transition duration-500"> Details</a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-72 h-72 bg-base-100 shadow-xl  transform transition duration-500 hover:scale-110">
                    <figure><img src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/bank_jobs_updated_thumbnail.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl text-center font-semibold">jobs</h2>
                        
                        <div class="card-actions justify-center">
                        <a href="#" class="bg-indigo-100 text-indigo-900 rounded-full py-3 px-8 shadow-md hover:shadow-xl transition duration-500"> Details</a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-72 h-72 bg-base-100 shadow-xl  transform transition duration-500 hover:scale-110">
                    <figure><img src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/basic_job.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl text-center font-semibold">jobs</h2>
                        
                        <div class="card-actions justify-center">
                        <a href="#" class="bg-indigo-100 text-indigo-900 rounded-full py-3 px-8 shadow-md hover:shadow-xl transition duration-500"> Details</a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-72 h-72 bg-base-100 shadow-xl  transform transition duration-500 hover:scale-110">
                    <figure><img src="https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/bcs_qs_thumbnail.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl text-center font-semibold">Jobs</h2>
                        
                        <div class="card-actions justify-center">
                        <a href="#" class="bg-indigo-100 text-indigo-900 rounded-full py-3 px-8 shadow-md hover:shadow-xl transition duration-500"> Details</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCourse;