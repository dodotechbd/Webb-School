import React from 'react';
import { Link } from 'react-router-dom';
const Courses = () => {
    return (
        <div className='text-center'>
            <h1>Courses</h1>
            
            <div>
              <Link to={"/admin/post"}><i className="fa-solid fa-folder-plus"></i>Post Courses</Link>
            </div>
        </div>
    );
};
export default Courses;