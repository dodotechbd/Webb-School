import React from 'react';
import { useForm } from 'react-hook-form';

const AcademicBookss = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
      console.log("hello", data);
      const url = `http://localhost:5000/AcadamicBook`;
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },

          body: JSON.stringify(data)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
          })

  }

  return (
      <div>
          <div>
              <h1 className='text-2xl text-center my-10'>Add Your Books</h1>
          </div>
          <div className='text-center'>
              <form onSubmit={handleSubmit(onSubmit)}>

                  <input
                      type="text"
                      placeholder="Books title"
                      class="input input-bordered w-full max-w-xs"
                      {...register("title", {
                          required: {
                              value: true,
                              message: "title Is Required"
                          }
                      })} /> <br />

                  <textarea

                      type="TextField"
                      placeholder=" Descriptions"
                      class="input input-bordered w-full max-w-xs mt-3"
                      {...register("description", {
                          required: {
                              value: true,
                              message: "TextField Is Required"
                          }
                      })}

                  /> <br />
                  <input
                      placeholder='Img URL'
                      className='input input-bordered w-full max-w-xs mt-3'
                      type="text" {...register("img")}

                  /><br />


                  <input type="submit" className='btn w-36 mt-3' />

              </form>
          </div>
      </div>
  );
};

export default AcademicBookss;