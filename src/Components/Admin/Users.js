import React from "react";

const Users = () => {
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
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
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/87720467?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Rashel Mahomud</div>
                    <div class="text-sm opacity-50">Bandladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span class="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>
                <button class="btn btn-success text-white btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button class="btn text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/96904997?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Tasmia Ishika</div>
                    <div class="text-sm opacity-50">Bandladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>
                <button class="btn btn-success text-white btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button class="btn text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/89705152?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Amit Sharma</div>
                    <div class="text-sm opacity-50">Bandladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span class="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>
                <button class="btn btn-success text-white btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button class="btn text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/97064563?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Shakhawath Hossain</div>
                    <div class="text-sm opacity-50">Bandladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span class="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>
                <button class="btn btn-success text-white btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button class="btn text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/96870077?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Md Badsha</div>
                    <div class="text-sm opacity-50">Bandladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span class="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>
                <button class="btn btn-success text-white btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button class="btn text-white btn-xs">Remove</button>
              </th>
            </tr>

            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/81031854?v=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Muhammad Shafi</div>
                    <div class="text-sm opacity-50">Bandladesh</div>
                  </div>
                </div>
              </td>
              <td>
                Programming Hero
                <br />
                <span class="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>
                <button class="btn btn-success text-white btn-xs">
                  Make Admin
                </button>
              </td>
              <th>
                <button class="btn text-white btn-xs">Remove</button>
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
