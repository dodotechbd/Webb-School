import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AudioPlayer } from "../AudioBook/AudioPlayer";

const MyAudioBook = ({ allcard }) => {
  const { bookData } = allcard;
  const [playerModal, setPlayerModal] = useState("");
  return (
    <tr className="hover">
      {bookData?.audio && (
        <>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={bookData?.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{bookData?.name}</div>
                <div className="text-sm opacity-50">{bookData?.speaker}</div>
              </div>
            </div>
          </td>
          <td>{bookData?.time.replace(/\D/g, "")}:00</td>
          <th>
            <button
              onClick={() => setPlayerModal(bookData?._id)}
              className="btn btn-xs"
            >
              play
            </button>
          </th>
          <div
            onClick={() => setPlayerModal("")}
            className={`fixed top-0 z-20 left-0 bg-base-100/60 w-full h-full ${
              playerModal !== bookData?._id && "hidden"
            }`}
          />
          <button
            onClick={() => setPlayerModal("")}
            className={`fixed top-16 lg:inline-block hidden hover:bg-base-300 right-0 z-40 p-4 ${
              playerModal !== bookData?._id && "-top-60"
            }`}
          >
            <AiOutlineClose size={30} />
          </button>
          <div
            className={`fixed z-30 lg:w-fit w-11/12 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ${
              playerModal !== bookData?._id && "hidden"
            }`}
          >
            <div className="relative rounded-2xl w-full mb-8 border border-neutral">
              <button
                onClick={() => setPlayerModal("")}
                className="absolute lg:hidden z-10 right-3 rounded text-white top-2 bg-[#0b1120]/60 p-1"
              >
                <AiOutlineClose size={15} />
              </button>
              <div
                className="hero rounded-t-2xl"
                style={{
                  backgroundImage: `url(${bookData?.img1})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="hero-overlay bg-[#0F1729] rounded-2xl bg-opacity-40"></div>
                <div className="flex lg:flex-row flex-col justify-center gap-4 items-center backdrop-blur-md w-full p-4 rounded-t-2xl">
                  <img
                    className="h-36 rounded-lg"
                    src={bookData?.img}
                    alt="image"
                  />
                  <h1 className="text-xl">
                    {" "}
                    <span className="text-2xl text-white drop-shadow-lg">
                      {bookData?.name} AudioBook
                    </span>
                    <div className="flex my-2 items-center gap-3">
                      <div className="avatar">
                        <div className="w-16 rounded-lg">
                          <img src={bookData?.img2} alt="image" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xl text-white">
                          {bookData?.speaker}
                        </p>
                      </div>
                    </div>
                  </h1>
                </div>
              </div>
              <div className="bg-base-200 rounded-b-2xl">
                <AudioPlayer bookData={bookData}></AudioPlayer>
              </div>
            </div>
          </div>
        </>
      )}
    </tr>
  );
};

export default MyAudioBook;
