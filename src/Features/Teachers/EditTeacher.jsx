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
    const [image, setImage] = useState(location.state.name);
    const [email, setEmail] = useState(location.state.email);
    const [job, setJob] = useState(location.state.job);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTeacher({ id, name, image, email, job }));
        navigate("/showteacher", { replace: true });
    };

    return (
        <div>

            <label for="my-modal-6" class="btn modal-button w-full mt-5 mb-5 bg-red-500">
                <i class="fa-solid fa-pen-to-square"></i><span className='ml-2'>Edit Teacher's Information</span></label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Please Edit Teacher's Information !</h3>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className='edit-task'>
                                    <h1 className='mt-2 text-success font font-bold text text-3xl'>Edit Teacher's Information</h1>
                                </div>
                                <br />
                                <label htmlFor="name">Teacher's Name:</label>
                                <input type="text" name="name" className="input input-bordered w-full " placeholder="Teacher's Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <label htmlFor="image">Teacher's Image:</label>
                            <input type="text" name="image" className='input input-bordered w-full' placeholder="Teacher's Image" value={image} onChange={(e) => setImage(e.target.value)} alt="" required />
                            <br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" className="input input-bordered w-full " placeholder="Teacher's Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <br />
                            <label htmlFor="job">Job:</label>
                            <input type="text" name="job" className="input input-bordered w-full " placeholder="Teacher's Job" value={job} onChange={(e) => setJob(e.target.value)} required />
                            <button className='w-full'> <input type="submit" className="input input-bordered bg bg-red-500 w-full mt-2 cursor-pointer" value="Click Hear to Edit Teacher's Information" /></button>
                        </form>
                    </div>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn bg-violet-700"><span className="mr-1">Exit</span><i class="fa-solid fa-arrow-right-from-bracket"></i></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTeacher;