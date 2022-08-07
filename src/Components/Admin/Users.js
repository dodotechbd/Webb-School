import React from "react";

const Users = () => {
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/87720467?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Rashel Mahomud</div>
                    <div className="text-sm opacity-50">Bangladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button className="btn btn-error text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/96904997?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Tasmia Ishika</div>
                    <div className="text-sm opacity-50">Bangladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button className="btn btn-error text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/89705152?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Amit Sharma</div>
                    <div className="text-sm opacity-50">Bangladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button className="btn btn-error text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/97064563?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Shakhawath Hossain</div>
                    <div className="text-sm opacity-50">Bangladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button className="btn btn-error text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/96870077?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Md Badsha</div>
                    <div className="text-sm opacity-50">Bangladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button className="btn btn-error text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/81031854?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Muhammad Shafi</div>
                    <div className="text-sm opacity-50">Bangladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button className="btn btn-error text-white btn-xs">Remove</button>
              </th>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Users;
