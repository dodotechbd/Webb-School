import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import AddTeacher from './AddTeacher';
import { deleteTeacher } from './TeacherSlice';
const TeacherView = () => {
    const teachers = useSelector((state) => state.teachersReducer.teachers)
    const dispatch = useDispatch();
    const handleDeleteTeacher = (id) => {
        dispatch(deleteTeacher(id))
    }
    return (
        <div class="overflow-x-auto">


            {/* <div> */}

            <label for="my-modal-6" class="btn modal-button w-full mt-5 mb-5 bg-pink-600">
                <i class="fa-solid fa-user-plus"></i><span className='ml-2'>Add New Teacher</span></label>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Please add new teacher !</h3>
                    <div>
                        {<AddTeacher></AddTeacher>}
                    </div>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn bg-violet-700"><span className="mr-1">Exit</span><i class="fa-solid fa-arrow-right-from-bracket"></i></label>
                    </div>
                </div>
            </div>

            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        {/* <th>Serial</th> */}
                        <th>Teacher's - Image</th>
                        <th>Teacher's - Name</th>
                        <th>Teacher's - Email</th>
                        <th>Job - Position</th>
                        <th>Edit - Teacher</th>
                        <th>Delete - Teacher</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers &&
                        teachers.map((book) => {
                            const { id, name, image, email, job } = book;
                            return (
                                <tr key={id}>
                                    {/* <td>{id}</td> */}
                                    <td> <img
                                        className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
                                        src={image}
                                        alt="Person"
                                    /></td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{job}</td>
                                    <td>
                                        <Link to="/editteacher" state={{ id, name, image, email, job }}>
                                            <button className='btn btn-success'><i class="fa-solid fa-pen-to-square"></i><span className='ml-1'>Edit</span></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { handleDeleteTeacher(id) }} className='btn btn-primary'><i class="fa-solid fa-trash-can"></i><span className='ml-1'>Delete</span></button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <hr />
        </div >
    );
};

export default TeacherView;