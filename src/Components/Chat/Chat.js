import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';




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




        </div>

    );
};

export default Chat;