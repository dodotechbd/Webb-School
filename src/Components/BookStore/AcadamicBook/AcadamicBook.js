import React from 'react';
import { useNavigate } from 'react-router-dom';

const AcadamicBook = ({ acadamicbook }) => {
    const { _id, name, img, description, price } = acadamicbook;
     const navigate = useNavigate();
    const navigateToAcadamicDetail = id=>{
     navigate(`/acadamicbook/${_id}`)
     }
    return (
        <div className=' bg-slate-200 rounded-lg position relative p-0 border-2 border-slate-300 '>
            <figure className="px-12 pt-4 ">
                <img className='w-48   rounded-lg text-center px-' src={img} alt="Books" />
            </figure>


            <div class="card-body px-2  ">
                <div className="card-body p-0 text-[#0B3456] ">
                    <h1 className="card-title">
                        <p className=' font-bold p-0'>{name}</p>
                    </h1>
                    <p className=''>{description}</p>
                    <p className=' font-bold pb-4'>${price}</p>
                </div>
            </div>
            <button onClick={()=>navigateToAcadamicDetail(_id)} class=" btn-block  position absolute bottom-0 bg-indigo-400 mt-4  text-center text-xl font-bold rounded-b-lg py-2  hover:shadow-xl hover:bg-[#0B3456] hover:text-white text-[#0B3456] ">Detalis</button>
        </div>
    );
};

export default AcadamicBook;
