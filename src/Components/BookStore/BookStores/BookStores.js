import React, { useEffect, useState } from 'react';
import BookStore from '../BookStore/BookStore';

const BookStores = () => {
    const [bookstores, setBookStores] = useState([]);
    useEffect(() => {
        fetch("Bookstore.json")
            .then(res => res.json())
            .then(data => setBookStores(data));
    })
    return (
        <div>
            <div  className='p-10'>
                <h1 className='lg:text-3xl md:text-2xl text-xl text-black font-semibold  mb-12 uppercase'>Academic BookStore</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  '>
                    {
                        bookstores.map(bookstore => <BookStore
                        key={bookstore.id}
                        bookstore={bookstore}
                        ></BookStore>)
                    }
                
                </div>
            </div>
        </div>
    );
};

export default BookStores;