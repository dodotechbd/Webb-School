import React from "react";
import SkillBook from "./SkillBook/SkillBook";
import { useQuery } from "react-query";
import Loader from "../Shared/Loading/Loader";

const SkillBooks = () => {
  const { data: skillbook, isLoading } = useQuery(["skillbook"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/SkillBooks`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="p-10">
        <h1 className="lg:text-3xl md:text-2xl text-xl mb-6 uppercase">
          Skill Development Books
        </h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-6  ">
          {skillbook?.map((skillbook) => (
            <SkillBook key={skillbook._id} skillbook={skillbook}></SkillBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBooks;
