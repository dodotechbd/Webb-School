import React, { useEffect, useState } from 'react';
import SkillBook from '../SkillBook/SkillBook'
const SkillBooks = () => {
    const [skillbooks, setSkillBooks] = useState([]);
    useEffect(() => {
        fetch("SkillBooks.json")
            .then(res => res.json())
            .then(data => setSkillBooks(data));
    })
    return (
        <div>
            <div  className='p-10'>
                <h1 className='lg:text-3xl md:text-2xl text-xl  font-semibold  mb-12 uppercase'>Skill Development Books</h1>
                <div className='grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  '>
                    {
                       skillbooks.map(skillbook => <SkillBook
                        key={skillbook._id}
                        skillbook={skillbook}
                        ></SkillBook>)
                    }
            
                </div>
            </div>
        </div>
    );
};

export default SkillBooks;