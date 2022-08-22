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


            <div className='text-center relative'>
                <div class="mockup-phone">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1 ">
                            

                        

                       


                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Chat;