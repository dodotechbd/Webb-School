import React from 'react';

const AcadamicBook = ({acadamicbook}) => {
    const { id, name, img, description, price } = acadamicbook;
    return (
        <div className=' bg-slate-200 rounded-lg'> 
            <a href='#' className=" w-100 h-full">
                <figure  className="mx-12 pt-10">
                    <img className='w-48   rounded-lg text-center px-' src={img} alt="Books" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <p className='text-2xl font-bold'>{name}</p>
                        <div className="badge badge-primary text-white">Top</div>
                    </h2>
                    <p className='text-xl'>{description}</p>
                    <p className='text-2xl font-bold border-b-2 pb-2'>${price}</p>
            
                </div>
            </a>
        </div>
    );
};

export default AcadamicBook;
