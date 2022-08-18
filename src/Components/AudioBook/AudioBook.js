import React from 'react';
import { useNavigate } from 'react-router-dom';

const AudioBook = ({audiobook}) => {
    const { _id, name, img, speaker, price} = audiobook;
    const navigate = useNavigate();
    const navigateToAudioBookDetail = id => {
        navigate(`/audiobook/${id}`);
      }; 
    return (
        <div
        onClick={() =>  navigateToAudioBookDetail(_id)}
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
            <h1>
              {name?.length >= 18 ? (
                <p className="text-xl font-bold">{name.slice(0, 18)}...</p>,
  
                <p className="text-xl font-bold">{name?.slice(0, 18)}...</p>
  
              ) : (
                <p className="text-xl font-bold">{name}</p>
              )}
            </h1>
            <p className="text-lg">{speaker}</p>
            <p className="text-lg text-emerald-600 font-bold">৳{price}</p>
          </div>
        </div>
      </div>
    );
};

export default AudioBook;