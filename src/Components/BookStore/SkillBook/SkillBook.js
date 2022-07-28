
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SkillBook = ({skillbook}) => {
    const { _id, name, img, description, price } = skillbook;
    const navigate = useNavigate();
    const navigateToAcadamicDetail = id=>{
     navigate(`/skillbook/${_id}`)
     }
    return (
        <div className=' bg-slate-200 rounded-lg position relative w-auto'  > 
          
                <figure  className="px-12 pt-4">
                    <img className='w-48   rounded-lg text-center px-' src={img} alt="Books" />
                </figure>
                <div class="card-body  pt-0">
                    <h1 class="card-title pt-2">
                        <p className='text-xl font-bold'>{name}</p>
                       
                    </h1>
                    <p className='text-xl'>{description}</p>
                    <p className='text-2xl font-bold border-b-2 pb-2'>${price}</p>
                   
                </div>
                <button  onClick={()=>navigateToAcadamicDetail(_id)} class=" btn-block position absolute bottom-0   bg-slate-400 mt-4  text-center text-xl font-bold rounded-b-lg py-2">Detalis</button>
        </div>
    );
};

export default SkillBook;