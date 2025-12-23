import { Link, NavLink } from "react-router";
import Logo from "../assets/hero-logo.png"
import { Github } from 'lucide-react';

const Navbar = () => {
  // Static class for active links
  const activeLink = "text-purple-700 font-bold underline underline-offset-4";
  const normalLink = "hover:text-purple-700";

  return (
    <nav className="bg-white shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-6">
        
        {/* Navbar Start: Logo */}
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl text-blue-500" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex font-semibold text-[16px]">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/install" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Installation
              </NavLink>
            </li>
            
          </ul>
        </div>

        {/* Navbar End: Actions & Mobile Dropdown */}
        <div className="navbar-end gap-4">
          
          {/* Mobile Menu Icon */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg z-50">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/apps">Apps</Link></li>
              <li><Link to="/install">Installation</Link></li>
            </ul>
          </div>

          {/* Static Buttons / Profile Placeholder */}
          <div className="flex items-center gap-3">
            <Link to='https://github.com/khondhokersazzad' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn-md text-white">
              <Github /> Contribute
            </Link>
            
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;