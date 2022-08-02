import React, { useEffect, useState } from 'react';
import AcadamicBook from '../AcadamicBook/AcadamicBook';


const AcadamicBooks = () => {
    const [acadamicbooks, setAcadamicBooks] = useState([]);
    useEffect(() => {
        fetch("AcadamicBooks.json")
            .then(res => res.json())
            .then(data => setAcadamicBooks(data));
    })
    return (
        <div>
            <div  className='p-10'>
                <h1 className='lg:text-3xl md:text-2xl text-xl  font-semibold  mb-12 uppercase'>Academic BookStore</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  '>
                    {
                       acadamicbooks.map(acadamicbook => <AcadamicBook
                        key={acadamicbook._id}
                        acadamicbook={acadamicbook}
                        ></AcadamicBook>)
                    }
            
                </div>
            </div>
        </div>
    );
};

export default AcadamicBooks;