import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { deleteTeacher } from './TeacherSlice';
import "./TeacherView.css"
const TeacherView = () => {
    const teachers = useSelector((state) => state.teachersReducer.teachers)
    const dispatch = useDispatch();
    const handleDeleteTeacher = (id) => {
        dispatch(deleteTeacher(id))
    }
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers &&
                        teachers.map((book) => {
                            const { id, name, email, job } = book;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{job}</td>
                                    <td>
                                        <Link to="/editteacher" state={{ id, name, email, job }}>
                                            <button className='button1'><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { handleDeleteTeacher(id) }} className='button1'><i class="fa-solid fa-trash-can"></i> Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <hr />
        </div>
    );
};

export default TeacherView;