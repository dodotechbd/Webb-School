
import React from 'react';

const SkillBook = ({skillbook}) => {
    const { id, name, img, description, price } = skillbook;
    return (
        <div className=' bg-slate-200 rounded-lg position relative'  > 
          
                <figure  className="mx-12 pt-10">
                    <img className='w-48   rounded-lg text-center px-' src={img} alt="Books" />
                </figure>
                <div class="card-body  mb-7">
                    <h2 class="card-title">
                        <p className='text-2xl font-bold'>{name}</p>
                        <div className="badge badge-primary text-white">Top</div>
                    </h2>
                    <p className='text-xl'>{description}</p>
                    <p className='text-2xl font-bold border-b-2 pb-2'>${price}</p>
                   
                </div>
                <button class=" btn-block mt-0 position absolute bottom-0   bg-slate-400 mt-4  text-center text-xl font-bold rounded-b-lg py-2">Detalis</button>
        </div>
    );
};

export default SkillBook;