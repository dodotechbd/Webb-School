import React from "react";
import AudioBook from "./AudioBook";
import { useQuery } from "react-query";
import Loader from "../Shared/Loading/Loading";
import useTitle from "../../Hooks/useTitle";

const AudioBooks = () => {
  useTitle("Audio Books");
  const { data: audiobook, isLoading } = useQuery(["audiobook"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/audiobook`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="lg:mx-10 lg:my-10 mx-6 my-6">
      <h1 className="lg:text-3xl md:text-2xl text-xl mb-6 uppercase">
      Latest Audiobooks
          </h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
          {audiobook?.map((audiobook) => (
            <AudioBook key={audiobook._id} audiobook={audiobook}></AudioBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioBooks;
