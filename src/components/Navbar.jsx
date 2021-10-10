import React, { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { VscNewFile } from 'react-icons/vsc';
import Logo from './Logo';
import { Link, useHistory } from 'react-router-dom';
import { HiBookmark } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';

function Navbar({ isHome }) {
  const { currentUser } = useAuth();

  return (
    <div className="flex px-6 py-4 items-center sticky top-0 z-50 bg-white shadow">
      <Logo />
      <div className="ml-auto md:m-0 hidden">
        <button className="btn btn-sm md:btn-md btn-outline btn-info mx-2">
          Sign Up
        </button>
      </div>
      {!currentUser && isHome && (
        <div className="ml-auto border border-pink-400 px-4 py-2 rounded-full text-pink-500">
          <button className="font-medium">Get Started</button>
        </div>
      )}
      {currentUser && (
        <div className="dropdown dropdown-hover dropdown-end ml-auto">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 cursor-pointer ring ring-blue-500 ring-offset-base-100 ring-offset-2">
              <img
                alt="avater"
                src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
              />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="p-2 menu dropdown-content border 
            border-gray-300 bg-base-100 rounded-lg w-48 shadow-lg"
          >
            <li>
              <Link
                to={`profile/${currentUser.email}`}
                className="text-sm flex items-center"
              >
                <MdAccountCircle size="22px" />
                <p className="pl-2">Profile</p>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="text-sm flex items-center">
                <FaSignOutAlt size="20px" className="ml-1" />
                <p className="pl-2">Log Out</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
