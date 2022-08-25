import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const BookCheckout = () => {
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

  const bookData =
    skillbook?.find((s) => s._id === bookId) ||
    academicbook?.find((s) => s._id === bookId);
  return (
    <div className="hero bg-base-100 py-8">
      <div className="flex justify-between w-full flex-col md:flex-row lg:flex-row items-start">
        <div className="text-center w-11/12 lg:w-7/12 md:w-6/12 lg:text-left mx-auto">
          <p className="text-2xl mb-4 font-bold">
            The course you are purchasing:
          </p>
          <div className="p-6 bg-base-300 border-[0.5px] border-neutral rounded-2xl">
            <div className="lg:flex items-center">
              <img src={bookData?.img} className="w-8/12 rounded-lg" alt="" />
              <div className="card-body lg:block hidden w-full">
                <h1 className="text-2xl font-bold mb-2">{bookData?.name}</h1>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <p className="p-3 text-2xl bg-green-300 bg-opacity-25 text-center rounded-md mr-4">
                      <i className="fa-solid fa-file-lines  text-green-500"></i>
                    </p>
                    <p className="uppercase w-full">
                      Pages <br />{" "}
                      <span className="uppercase text-[#efad1e]">
                        {bookData?.pages}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="p-3 text-2xl bg-red-300 bg-opacity-25 text-center rounded-md mr-4">
                      <i className="fa-solid fa-database    text-red-500"></i>
                    </p>
                    <p className="uppercase w-full">
                      Size <br />{" "}
                      <span className="uppercase text-[#efad1e]">
                        {bookData?.file}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="p-3 text-2xl bg-pink-300 bg-opacity-25 text-center rounded-md mr-4">
                      <i className="fa-solid fa-dice-d6    text-pink-500"></i>
                    </p>
                    <p className="uppercase w-full">
                      Interactive <br />{" "}
                      <span className="uppercase text-[#efad1e]">
                        {bookData?.interactive}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="p-3 text-2xl bg-yellow-300 bg-opacity-25 text-center rounded-md mr-4">
                      <i className="fa-solid fa-file-pdf text-yellow-500"></i>
                    </p>
                    <p className="uppercase w-full">
                      Format <br />{" "}
                      <span className="uppercase text-[#efad1e]">
                        {bookData?.format}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex text-lg font-bold bg-opacity-20 bg-[#495CA9] p-4 my-4 rounded-xl justify-between">
                  <div>
                    <p>Price</p>
                  </div>
                  <div>
                    <p className="text-2xl">${bookData?.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 lg:w-4/12 md:w-5/12 w-11/12 mx-auto    mt-4 border border-neutral bg-base-300">
          please Checkout
        </div>
      </div>
    </div>
  );
};

export default BookCheckout;