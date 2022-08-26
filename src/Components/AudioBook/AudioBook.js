import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPlayCircleFill } from 'react-icons/bs'

const AudioBook = ({ audiobook }) => {
  const { _id, name, img } = audiobook;
  const navigate = useNavigate();
  const navigateToAudioBookDetail = id => {
    navigate(`/audiobook/${id}`);
  };
  return (
    <div onClick={() => navigateToAudioBookDetail(_id)}
      className="btn-ghost bg-base-300 rounded-lg position relative p-0 shadow-lg cursor-pointer mb-4">

      <figure>
        <img
          className="mx-auto mt-4 w-48 rounded-lg text-center"
          src={img}
          alt="Books"
        />
      </figure>
      <div className="card-body p-0">
        <div className="card-body p-4">
          <div className='flex gap-3'>
            <div>
              <button className='mt-2'><BsFillPlayCircleFill size={45} color='green'></BsFillPlayCircleFill></button>
            </div>
            <div className=''>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              </div>
              {name?.length >= 18 ? (

                <p className="text-xl font-bold">{name.slice(0, 18)}...</p>,

                <p className="text-xl font-bold">{name?.slice(0, 18)}...</p>

              ) : (
                <p className="text-xl font-bold">{name}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBook;