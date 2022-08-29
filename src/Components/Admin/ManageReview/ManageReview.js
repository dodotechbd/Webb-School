import React from "react";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
const ManageReview = () => {
  return (
    <div className="text-center">
      <div className="bg-base-300 border-b border-neutral">
        <ul className="menu menu-horizontal w-fit">
          <li>
            <Link to={"/admin/reviews"} className="hover:rounded-none">
              All Reviews
            </Link>
          </li>
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
