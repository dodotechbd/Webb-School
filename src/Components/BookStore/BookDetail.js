import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { Link } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const { data: skillbook } = useQuery(["skillbook"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/SkillBooks`).then(
      (res) => res.json()
    )
  );

  const { data: academicbook } = useQuery(["academicboook"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/AcadamicBook`).then(
      (res) => res.json()
    )
  ); 

  const newService =
    skillbook?.find((s) => s._id === bookId) ||
    academicbook?.find((s) => s._id === bookId);
  return (
    <div className="hero bg-base-100 my-6">
      <div className="flex lg:w-full w-11/12 gap-10  justify-center flex-col-reverse lg:flex-row md:flex-row items-start">
        <div className="lg:w-6/12 md:w-full">
          <h1 className="text-3xl uppercase font-bold">{newService?.name}</h1>
          <h1 className="text-2xl pt-8 pb-4 uppercase">Writers</h1>
          <div className="grid lg:grid-cols-2 lg:pl-8 gap-6">
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img1} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer1}</h2>
                <p>Dhaka,Bangladesh</p>
              </div> 
            </div>
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img2} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer2}</h2>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img3} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer3}</h2>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img4} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer4}</h2>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="border border-neutral rounded-lg px-4 py-3 mt-12">
            <p className="text-2xl pb-4"> A few words about the book</p>
            <p>
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
        
        <div className="lg:w-1/3 md:w-2/3 w-full bg-[#354795] shadow-xl p-5 card text-white">
          <div className="p-6 grid items-center gap-6 justify-around lg:grid-cols-2">
            <div>
              <figure>
                <img
                  className="w-96 rounded-md"
                  src={newService?.img}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="grid lg:grid-cols-1 grid-cols-2 gap-3">
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-file-lines  text-green-400"></i>
                </p>
                <p>
                  Pages <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.pages}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-database    text-red-400"></i>
                </p>
                <p>
                  Size <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.file}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-dice-d6    text-pink-400"></i>
                </p>
                <p>
                  Interactive <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.interactive}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-file-pdf text-purple-400"></i>
                </p>
                <p>
                  Format <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.format}
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
                <p className="text-2xl">${newService?.price}</p>
              </div>
            </div>
            <Link to={`/bookcheckout/${bookId}`}>
              <button className="text-lg font-bold p-4 rounded-xl bg-[#efad1e] w-full text-blue-900 hover:bg-secondary hover:text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
