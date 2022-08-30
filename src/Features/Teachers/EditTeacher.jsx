import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editTeacher } from "./TeacherSlice";

const EditTeacher = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [email, setEmail] = useState(location.state.email);
    const [job, setJob] = useState(location.state.job);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTeacher({ id, name, email, job }));
        navigate("/showteacher", { replace: true });
    };

    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author: </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        required
                    />
                </div>
                <button className="button1" type="submit">Edit Teacher</button>
            </form>
        </div>
    );
};

export default EditTeacher;