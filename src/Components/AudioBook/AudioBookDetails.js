import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AudioPlayer } from "./AudioPlayer";
import Rating from "react-rating";
import { ImStarEmpty, ImStarFull } from "react-icons/im";

const AudioBookDetails = () => {
  const { audiobookId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("/audiobook.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const newDetails = details.find((s) => s._id === audiobookId);
  //   console.log(newService);
  return (
    <div className="mb-12">
      <h1 className="text-3xl text-center pt-6 font-bold mb-8">
        Explore Top Rated Podcasts
      </h1>

      <div className="flex lg:w-full w-11/12 gap-10  justify-center flex-col lg:flex-row md:flex-row items-start mx-auto">
        <div className="lg:w-6/12 md:w-full w-full">
          <div className="rounded-2xl mb-8 border border-neutral">
            <div
              className="hero rounded-2xl"
              style={{
                backgroundImage: `url(${newDetails?.img1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div class="hero-overlay bg-[#0F1729] rounded-2xl bg-opacity-40"></div>
              <div className="flex lg:flex-row flex-col justify-center gap-4 items-center backdrop-blur-md w-full p-4 rounded-2xl">
                <img className="w-48 rounded-lg" src={newDetails?.img} alt="" />
                <h1 className="text-xl">
                  {" "}
                  <span className="text-2xl text-white drop-shadow-lg">
                    {newDetails?.name} AudioBook
                  </span>
                  <div className="flex my-2 items-center gap-3">
                    <div className="avatar">
                      <div className="w-16 rounded-lg">
                        <img src='https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/160623841_274437330713385_6140920492295108645_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFtQEaluUg74EGqXarKgTxpa7_DeKoPE9hrv8N4qg8T2CsARVqT57ySYDIfqcwwh0Kejys1flIHHxJtU526y84c&_nc_ohc=tn9Cx-S5wfkAX-xywgB&_nc_ht=scontent-frt3-2.xx&oh=00_AT9tBRiQ5zEenL7v1I0DnErFyWmctPU5qJeZHNncGXDMew&oe=632C99A4' />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-white">{newDetails?.speaker}</p>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
            <div className="bg-base-200 rounded-b-2xl hidden">
              <AudioPlayer></AudioPlayer>
            </div>
          </div>
          <div className="border border-neutral rounded-lg px-4">
            <p className="text-2xl p-4"> About podcast</p>
            <p className="p-3">
              Improve grammar, word choice, and sentence structure in your
              writing. It's free! Grammarly Improve grammar, word choice, and
              sentence structure in your writing. It's free! Grammarly Can Help
              You Write Polished, Effective Book Reports Every Time. Fix
              Punctuation Errors. Find and Add Sources Fast. Easily Improve Any
              Text. AI Writing Assistant. Improve grammar, word choice, and
              sentence structure in your writing. It's free! Grammarly Can Help
              You Write Polished, Effective Book Reports Every Time. Fix
              Punctuation Errors. Find and Add Sources Fast. Easily Improve Any
              Text. AI Writing Assistant
            </p>
          </div>
          <div>
            <div>
              <h2 class="text-xl mt-3">Rate this book</h2>
              <div className="text-3xl my-2 text-[#FAAF00]">
                <Rating
                  count={5}
                  //   onChange={"rating"}
                  fractions={2}
                  emptySymbol={<ImStarEmpty />}
                  fullSymbol={<ImStarFull />}
                />
              </div>
              <textarea
                class="textarea textarea-bordered h-24 mb-2 bg-base-300 w-full rounded-md"
                placeholder="Write about this book"
                required
              ></textarea>
              <button type="submit" class="px-8 py-2 rounded-md btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* Mp3 information card */}
        <div className="lg:w-1/3 md:w-2/3 w-full  bg-[#354795] shadow-xl p-5 card text-white">
          <div className="p-3 grid items-center  gap-6 justify-around">
            <div className="hidden">
              <figure>
                <img
                  className="rounded-md w-full h-40"
                  src={newDetails?.img1}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-3">
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-file-lines  text-green-400"></i>
                </p>
                <p>
                  Addedate <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.addedate}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-database    text-red-400"></i>
                </p>
                <p>
                  Source <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.source.slice(0, 10)}...
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-dice-d6    text-pink-400"></i>
                </p>
                <p>
                  Listener
                  <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.listener}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-circle-play text-purple-400"></i>
                </p>
                <p>
                  Format <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.format}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-clock text-teal-400"></i>
                </p>
                <p>
                  Duration <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.time}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                </p>
                <p>
                  Average Ratings <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.ratings}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div className="flex text-lg font-bold bg-[#495CA9] p-4 my-4 rounded-xl justify-between">
              <div>
                <p>Price</p>
              </div>
              <div>
                <p className="text-2xl">${newDetails?.price}</p>
              </div>
            </div>
            <btn>
              <button className="text-lg font-bold p-4 rounded-xl bg-[#efad1e] w-full text-blue-900 hover:bg-secondary hover:text-white">
                Buy Now
              </button>
            </btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBookDetails;
