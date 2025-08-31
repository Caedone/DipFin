
import React from 'react';
import logo from "./logo.png";
import { Link } from 'react-router';
interface props {}
const Navbar: React.FC = () => {
	return (
		 <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-dark-blue">
              Search
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-dark-blue">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-light-green hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;