
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SkillBook = ({skillbook}) => {
    const { _id, name, img, description, price } = skillbook;
    const navigate = useNavigate();
    const navigateToAcadamicDetail = id=>{
     navigate(`/skillbook/${_id}`)
     }
    return (
        <div className=' bg-base-100 rounded-lg position relative p-0 border border-neutral'  > 
          
                <figure  className="px-12 pt-4">
                    <img className='w-48   rounded-lg text-center px-' src={img} alt="Books" />
                </figure>
                <div class="card-body  px-2">
                <div className="card-body p-0 ] ">
                    <h1 class="card-title pt-2">
                        <p className='text-xl font-bold uppercase'>{name}</p>
                       
                    </h1>
                    <p className=''>{description}</p>
                    <p className='font-bold pb-4'>${price}</p>
                    </div>
                </div>
                <button  onClick={()=>navigateToAcadamicDetail(_id)} class="btn-block btn btn-primary text-white  rounded-none  position absolute bottom-0 mt-4  text-center text-xl font-bold rounded-b-lg py-2 normal-case">Detalis</button>
        </div>
    );
};

export default SkillBook;