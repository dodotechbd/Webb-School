import React, { useState } from 'react';
import swal from 'sweetalert';


const LiveTable = ({users,index , refetch}) => {
    const {slots, Date , Link, _id} = users
    const [isLoading, setIsLoading] = useState(null);

   
   const handleDelete = (id) =>{
    setIsLoading(true); 
    fetch(`https://rocky-escarpment-87440.herokuapp.com/lives/${id}`,{
        method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        if(data.deleteCount){
            swal.fire(`${slots} Class deleted`, {
              icon: "success",
              className: "rounded-xl",
            });
            refetch();
          }

    })()
   }

    return (
        <tr>
        <th>{index + 1}</th>
        <td>{slots}</td>
        <td>{Date}</td>
       
        <td><button onClick={() => handleDelete(_id)}   className={`btn btn-xs btn-outline btn-primary hover:text-white ${
            isLoading && "loading"
          }`}>Delete</button></td>
      </tr>
    )
};

export default LiveTable;