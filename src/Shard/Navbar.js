import React from 'react';
import { Link } from 'react-router-dom';
import wslogo from '../../src/imeges/wslogo.png'

const Navbar = () => {
    const manuItems = <>
       <li><Link to ="courses">Courses</Link></li>
        <li><Link to ="bookstore">Bookstore</Link></li>
        <li><Link to ="jobs">Jobs</Link></li>
        <li><Link to ="blogs">Blogs</Link></li>
        <li><Link to ="login">Login</Link></li>
    </>
    return (
        <div class="navbar bg-base-200">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class=" font-bold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {manuItems}
      </ul>
    </div>
    <Link to ="/"><img width='170px' src={wslogo} alt=''></img></Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0  font-bold">
    {manuItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;