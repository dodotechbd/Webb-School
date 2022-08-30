import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./AddTeacher.css";
import { addTeacher } from './TeacherSlice';
const AddTeacher = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const numberofTeachers = useSelector((state) => state.teachersReducer.teachers.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const teacher = {
            id: numberofTeachers + 1, name, email, job
        }
        dispatch(addTeacher(teacher));
        navigate("/showteacher", { replace: true })
    };
    return (
        <div>
            <h1>Add-Teacher</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={job} onChange={(e) => setJob(e.target.value)} required />
                </div>
                <button className='button1' type='submit'>Add Teacher</button>
            </form>
        </div>
    );
};

export default AddTeacher;