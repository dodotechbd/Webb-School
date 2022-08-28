import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const ManageReview = () => {
  return (
    <div className="text-center">
      <div className="bg-base-200 shadow-lg">
        <ul className="menu menu-horizontal bg-base-300 w-fit">
          <li>
            <NavLink to={"/admin/reviews/course"} className="hover:rounded-none">
              Course Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/reviews/book"} className="hover:rounded-none">
              Book Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ManageReview;
