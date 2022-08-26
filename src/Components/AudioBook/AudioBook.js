import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPlayCircleFill } from 'react-icons/bs'

const AudioBook = ({ audiobook }) => {
  const { _id, name, img, price, deal } = audiobook;
  const navigate = useNavigate();
  const navigateToAudioBookDetail = id => {
    navigate(`/audiobook/${id}`);
  };
  return (
    <div onClick={() => navigateToAudioBookDetail(_id)}
      className="btn-ghost bg-base-300 rounded-lg position relative p-0 shadow-lg cursor-pointer mb-4">

      <figure>
        <img
          className="mx-auto mt-4 lg:w-52 sm:w-48 rounded-lg text-center"
          src={img}
          alt="Books"
        />
      </figure>
      <div className="card-body p-0">
        <div className="card-body p-4">
          <div className=' gap-3'>
            {name?.length >= 18 ? (

              <p className="text-xl font-bold">{name.slice(0, 18)}...</p>,

              <p className="text-xl font-bold">{name?.slice(0, 18)}...</p>

            ) : (
              <p className="text-xl font-bold">{name}</p>
            )}
            <div class="rating rating-sm">
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            </div>
            <p className='font-serif text-xl'>New Deal at {deal} <span className='text-green-500 ml-2 font-serif text-2xl'>${price}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBook;