import React from "react";

const Payments = () => {
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ganderton</td>
              <td>pecialist@gmail.com</td>
              <td>Unpaid</td>
            </tr>
            <tr>
              <td>Hart Hagerty</td>
              <td>echnician@gmail.com</td>
              <td>Unpaid</td>
            </tr>
            <tr>
              <td>Brice Swyre</td>
              <td>ccountant@gmail.com</td>
              <td>Unpaid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
