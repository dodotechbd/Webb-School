import React, { useState } from "react";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";

const UserRow = ({ user, refetch, index }) => {
    const { name, email, role, _id, image } = user;
    const [isLoading, setIsLoading] = useState(null);

    const handleMakeAdmin = (id) => {
        setIsLoading(true);
        (async () => {
          const { data } = await primaryAxios.put(`https://rocky-escarpment-87440.herokuapp.com/user-role?id=${id}`, {
            role: "admin",
          });
          if (data.success) {
            refetch();
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: '#a5dc86',
                customClass: {
                  popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
              await Toast.fire({
                icon: 'success',
                title: `${name} Is Now Admin`
              })
            setIsLoading(false);
          }
        })();
      };

  return (
    <tr>
        <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`${image ? image : "https://icon-library.com/images/user-profile-icon/user-profile-icon-12.jpg"}`}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>
      <td>
        {email}
      </td>
      <td>
        <button onClick={() => handleMakeAdmin(_id)} className={`btn btn-xs btn-outline btn-primary hover:text-white rounded-full ${
            isLoading && "loading"
          }`} disabled={role}>Make Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
