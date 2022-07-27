import React from 'react';

const AcadamicBook = ({ acadamicbook }) => {
    const { id, name, img, description, price } = acadamicbook;
    const navigateToAcadamicDetail =id =>{

    }
    return (
        <div className=' bg-slate-200 rounded-lg position relative h-full'>
            <figure className="px-12 pt-4">
                <img className='w-48   rounded-lg text-center px-' src={img} alt="Books" />
            </figure>
            <div class="card-body pt-0  ">
                <div className="card-body p-4">
                    <h1 className="card-title ">
                        <p className='text-xl font-bold'>{name}</p>
                    </h1>
                    <p className='text-xl'>{description}</p>
                    
                    <p className='text-2xl font-bold '>${price}</p>
                    

                </div>
               
            </div>
            <button onClick={() =>navigateToAcadamicDetail(id)} class=" btn-block  position absolute bottom-0  bg-slate-400 mt-4  text-center text-xl font-bold rounded-b-lg py-2">Detalis</button>
        </div>

    );
};

export default AcadamicBook;
