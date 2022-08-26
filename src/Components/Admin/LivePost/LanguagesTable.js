import React from 'react';
import { useForm } from 'react-hook-form';


const LanguagesTable = ({ languages, index }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const { uname } = languages
    return (

        <tr>
            <td>{index + 1}</td>
            <td>{uname}</td>
            <td>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input 
      class="input input-bordered input-success w-full max-w-xs"
      type="text"
      placeholder="Past the link" 
      {...register("link")} />
     
      <input type="submit" />
    </form>

   

            </td>
            <td><button className='btn btn-sm'>button</button></td>
        </tr>


    );
};

export default LanguagesTable;