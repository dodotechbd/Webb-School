import React, { useEffect, useState } from 'react';
import AcadamicBook from '../AcadamicBook/AcadamicBook';


const AcadamicBooks = () => {
    const [acadamicbooks, setAcadamicBooks] = useState([]);
    useEffect(() => {
        fetch("Bookstore.json")
            .then(res => res.json())
            .then(data => setAcadamicBooks(data));
    })
    return (
        <div>
            <div  className='p-10'>
                <h1 className='lg:text-3xl md:text-2xl text-xl text-black font-semibold  mb-12 uppercase'>Academic BookStore</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  '>
                    {
                       acadamicbooks.map(acadamicbook => <AcadamicBook
                        key={acadamicbook.id}
                        acadamicbook={acadamicbook}
                        ></AcadamicBook>)
                    }
            
                </div>
            </div>
        </div>
    );
};

export default AcadamicBooks;