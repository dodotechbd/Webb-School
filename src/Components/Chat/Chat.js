import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import io from 'socket.io-client';
import auth from '../../firebase.init';



const socket = io.connect("https://rocky-escarpment-87440.herokuapp.com/");
const userName = nanoid(4);

const Chat = () => {
    const [user, loading, error] = useAuthState(auth);

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const messageEl = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])

    useEffect(() => {
        socket.on('chat', (payload) => {
            setChat([...chat, payload]);
        });
    });
    

    const sentChat = (e) => {
        e.preventDefault();
        socket.emit("chat", { message, userName });
        setMessage("");
    };

    // const onSubmit = data => {
    //     const url = `https://rocky-escarpment-87440.herokuapp.com/chat`;

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         window.alert('Continuing your Chat')
    //         window.location.reload() 
    //     })
    // }



    return (
        <div>
            <h1 className='my-10 text-center font-bold text-3xl '>Massage Your Frinds</h1>
            <div className="chat m-auto ">
                <div className="head">GROUP CHAT</div>

                <div className="messages" ref={messageEl}>
                    {chat.map((payload, index) => {
                        return <p className='text-2xl scroll-auto' key={index}>{payload.message} <span className='font-bold bg-base-300 p-2 rounded'>user: {payload.userName}</span></p>;

                    })}
                </div>

                <div className="chatfooter">
                    <form onSubmit={sentChat} className='text-center flex'>

                        <input
                            type="text"
                            placeholder="Type here"
                            name="chat"
                            value={message}
                            className="bg-base-100 chatinput"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        
                        <button><i type='submit' className="fa-solid fa-paper-plane text-3xl" ></i></button>

                    </form>

                </div>
            </div>

        </div>

    )
};
export default Chat;