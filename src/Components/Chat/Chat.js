import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';

const socket = io.connect("http://localhost:5000");
const userName = nanoid(1);

const Chat = () => {
    const [user, loading, error] = useAuthState(auth);

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);


    const sentChat = (e) => {
        e.preventDefault();
        socket.emit("chat", { message, userName });
        setMessage("");
    };

    useEffect(() => {
        socket.on('chat', (payload) => {
            setChat([...chat, payload]);
        });
    });

    return (
        <div>


            <h1 className='my-5 text-center font-bold text-4xl'> COMMINUCATIONS YOUR FRINDS</h1>

            <div className='text-center relative my-20'>

                <div class="card w-96 bg-base-300 shadow-xl text-center">
                    <div class="card-body">

                        {chat.map((payload, index) => {
                            return <p className='text-2xl scroll-auto' key={index}>{payload.message} <span className='font-bold bg-base-300 p-2 rounded'>user: {payload.userName}</span></p>;

                        })}




                    </div>
                </div>
                <div class="card w-96 bg-base-300 shadow-xl text-center my-3">
                    <div class="card-body">

                        <form onSubmit={sentChat} className='text-center bottom-0 fixed bottom-0 absolute mb-5 mt-2'>

                            <input
                                type="text"
                                placeholder="Type here"
                                name="chat"
                                value={message}
                                className="input input-bordered my-5 "
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            />
                            <button type='submit' className="btn btn-outline btn-accent ">sent</button>

                        </form>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default Chat;