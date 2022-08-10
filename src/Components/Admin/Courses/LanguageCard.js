import React from 'react';
import Swal from 'sweetalert2';

const LanguageCard = ({ allcard, deleteItem }) => {
    const { _id } = allcard;

    const deleteItems = (id) => {
         Swal.fire({
          icon: 'question',
          title: 'Are you sure you want to delete this course?',
          showDenyButton: true,
          showCancelButton: true,
          showConfirmButton: false,
          denyButtonText: `Yes, I'm sure`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isDenied) {
            fetch(`https://rocky-escarpment-87440.herokuapp.com/language/${id}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              deleteItem(_id);
            });
            Swal.fire('The course has been successfully deleted', '', 'success')
          } else {
            Swal.fire('Your course has not been deleted', '', 'info')
          }
        })
      };
    return (
        <div
        className="mx-auto mt-3 card card-compact lg:w-48 w-10/12 bg-base-100 border rounded-md border-neutral"
      >
        <figure>
          <img src={allcard?.img} alt="Shoes" className="lg:h-28 w-full" />
        </figure>
        <div className="">
          <div className="px-2 pt-1 flex justify-between">
            <p className="text-md font-sans">
              {allcard?.instructor}
            </p>
            {allcard?.badge ? (<div className="badge badge-secondary">{allcard?.badge}</div>) : (<></>)}
          </div>
          <h2 className="py-1 text-md hover:text-info">
            {allcard?.name.slice(0, 21)}
          </h2>
          <div>
            <button onClick={() => deleteItems(_id)} className='btn btn-block text-red-600 rounded-none rounded-b-md btn-ghost border-t-neutral'>Delete Course</button>
          </div>
        </div>
      </div>
    );
};

export default LanguageCard;