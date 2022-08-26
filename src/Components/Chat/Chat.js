import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';
import { sendEmailVerification } from 'firebase/auth';
import './style.css';


const socket = io.connect("https://rocky-escarpment-87440.herokuapp.com/");
const userName = nanoid(4);


// import sendIcon from './send.svg';

// const generateMessage = () => {
//     const words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
//     const text = [];
//     let x = 7;
//     while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
//     return text.join(" ");
// }

const Chat = () => {
    const [user, loading, error] = useAuthState(auth);

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const messageEl = useRef(null);
    const [messages, setMessages] = useState([]);

 

    // useEffect(() => {
    //     const generateDummyMessage = () => {
    //         setInterval(() => {
    //             setMessages(prevMsg => [...prevMsg, generateMessage()]);
    //         }, 2000);
    //     }
    //     generateDummyMessage();
    // }, []);


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
            <div className="chat">
                <div className="head">ChatBot</div>

                <div className="messages" ref={messageEl}>
                    {chat.map((payload, index) => {
                        return <p className='text-2xl scroll-auto' key={index}>{payload.message} <span className='font-bold bg-base-300 p-2 rounded'>user: {payload.userName}</span></p>;

                    })}
                </div>

                <div className="footer">
                    <form onSubmit={sentChat} className='text-center'>

                        <input
                            type="text"
                            placeholder="Type here"
                            name="chat"
                            value={message}
                            className="input input-bordered "
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        <button type='submit' className="btn btn-outline btn-accent ">sent</button>

                    </form>
                    <img src={sendEmailVerification} />
                </div>
            </div>

            <h1 className='my-5 text-center font-bold text-4xl'> COMMINUCATIONS YOUR FRINDS</h1>
            {/* <div>
                <img src={user.photoURL}  />
            </div> */}

            <div className='grid justify-items-center relative my-20'>


                <div class="card lg:w-2/5  bg-base-300 shadow-xl text-center">
                    <div class="card-body">

                        {/* {chat.map((payload, index) => {
                            return <p className='text-2xl scroll-auto' key={index}>{payload.message} <span className='font-bold bg-base-300 p-2 rounded'>user: {payload.userName}</span></p>;

                        })} */}

                    </div>
                </div>

                <div class="card lg:w-96 bg-base-300 shadow-xl text-center my-3">
                    <div class="card-body">

                        {/* <form onSubmit={sentChat} className='text-center'>

                            <input
                                type="text"
                                placeholder="Type here"
                                name="chat"
                                value={message}
                                className="input input-bordered "
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            />
                            <button type='submit' className="btn btn-outline btn-accent ">sent</button>

                        </form> */}
                    </div>
                </div>


            </div>

        </div>

    )
};
export default Chat;