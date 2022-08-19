import React, { useEffect, useState } from 'react';
import AudioBook from './AudioBook';

const AudioBooks = () => {
    const [audioBook, setAudioBook] = useState([]);
    useEffect(() => {
        fetch("audiobook.json")
            .then(res => res.json())
            .then(data => setAudioBook(data));
    })
    return (
        <div>
            <div className='p-10'>
                <h1 className='lg:text-6xl text-sky-600 font-bold  md:text-2xl text-xl mb-6 uppercase'>Latest Audiobooks</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  '>
                    {
                        audioBook.map(audiobook => <AudioBook
                            key={audiobook._id}
                            audiobook={audiobook}
                        ></AudioBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AudioBooks;