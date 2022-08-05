import React from 'react';
import { Link } from 'react-router-dom';

const MyCourseCard = ({ allcard }) => {

    const cardIndex = allcard.file[0].details[0].fileName;
    return (
        <Link to={`/course/${allcard?.uname}/${allcard?.list}/${cardIndex}`}>
      <div
        class="mx-auto mt-3 card card-compact w-72 bg-base-100 border rounded-md
       hover:-translate-y-3 border-neutral  transform transition duration-300"
      >
        <figure>
          <img src={allcard?.img} alt="Shoes" className="h-44 w-full" />
        </figure>
        <div class="">
          <h2 class="px-2 py-1 text-xl hover:text-info">
            {allcard?.name.slice(0, 24)}
          </h2>
          <progress class="progress progress-primary w-full px-2" value="10" max="100"></progress>
          <div className="border-t border-neutral p-2 text-lg font-bold">
            <p className="text-accent text-center">Continue</p>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default MyCourseCard;