import React from "react";
import { useQuery } from "react-query";
import Loader from "../Shared/Loading/Loader";
import AcadamicBook from "./AcadamicBook/AcadamicBook";
import SkillBooks from "./SkillBooks";

const BookStore = () => {
  const { data: acadamicbook, isLoading } = useQuery(["acadamicbook"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/AcadamicBook`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        <div className="p-10">
          <h1 className="lg:text-3xl md:text-2xl text-xl mb-6 uppercase">
            Academic BookStore
          </h1>
          <div className="grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6  ">
            {acadamicbook?.map((acadamicbook) => (
              <AcadamicBook
                key={acadamicbook._id}
                acadamicbook={acadamicbook}
              ></AcadamicBook>
            ))}
          </div>
        </div>
      </div>
      <SkillBooks></SkillBooks>
    </div>
  );
};

export default BookStore;
