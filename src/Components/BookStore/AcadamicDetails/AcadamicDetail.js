import React from 'react';
import {useParams} from 'react-router-dom'

const AcadamicDetail = () => {
    const {acadamicbookId} = useParams();
    return (
        <div>
            <h2 className='p-32 text-4xl font-bold'>welcome our detals: {acadamicbookId}</h2>
        </div>
    );
};

export default AcadamicDetail;