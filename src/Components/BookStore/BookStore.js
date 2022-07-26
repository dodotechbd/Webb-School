import React from 'react';
import AcadamicBooks from './AcadamicBook/AcadamicBooks';
import SkillBooks from './SkillBook/SkillBooks';


const BookStore = () => {
    return (
            <div>
                <AcadamicBooks></AcadamicBooks>
                <SkillBooks></SkillBooks>
            </div>
           
         
    );
};

export default BookStore;