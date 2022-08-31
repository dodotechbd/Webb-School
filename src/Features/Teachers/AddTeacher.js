import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTeacher } from './TeacherSlice';
const AddTeacher = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const numberofTeachers = useSelector((state) => state.teachersReducer.teachers.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const teacher = {
            id: numberofTeachers + 1, name, image, email, job
        }
        dispatch(addTeacher(teacher));
        navigate("/showteacher", { replace: true })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='edit-task'>
                        <h1 className='mt-2 text-success font font-bold text text-3xl'>Add New Teacher</h1>
                    </div>
                    <br />
                    <label htmlFor="name">Teacher's Name:</label>
                    <input type="text" name="name" className="input input-bordered w-full " placeholder="Teacher's Name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <br />
                    <label htmlFor="image">Teacher's Image:</label>
                    <input type="text" name="image" className='input input-bordered w-full' placeholder="Teacher's Image" value={image} onChange={(e) => setImage(e.target.value)} alt="" required />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="input input-bordered w-full " placeholder="Teacher's Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br />
                    <label htmlFor="job">Job:</label>
                    <input type="text" name="job" className="input input-bordered w-full " placeholder="Teacher's Job" value={job} onChange={(e) => setJob(e.target.value)} required />
                    <button type='submit' className='w-full cursor-pointer'> <input type="submit" className="input input-bordered bg bg-red-500 w-full mt-2 cursor-pointer" value="Click Hear to Add New Teacher" /></button>
                </div>
            </form>
        </div >
    );
};

export default AddTeacher;