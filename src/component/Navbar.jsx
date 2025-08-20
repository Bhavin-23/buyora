import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useCart } from "../context/CartContext";

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const [openNav, setopenNav] = useState(false);
  const { cartItem } = useCart();

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <div className='sticky top-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg shadow-yellow-500/20 py-4 px-4 md:px-0 z-50'>

        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          {/* Logo */}
          <div className='flex gap-7 items-center'>
            <Link to={"/"}>
              <h1 className='text-gray-100 font-bold text-3xl  tracking-wide'>
                <span className='text-yellow-500 font-serif'>B</span>uyora
              </h1>
            </Link>

            {/* Location */}
            <div className='md:flex gap-2 cursor-pointer text-gray-300 items-center hidden'>
              <span className='font-semibold'>
                {location ? (
                  <div className="-space-y-2">
                    <p>{location.county}</p>
                    <p>{location.state}</p>
                  </div>
                ) : (
                  "Add Address"
                )}
              </span>
              <span onClick={toggleDropdown} className='ml-1 select-none cursor-pointer'>
                🔽
              </span>
            </div>
            {openDropdown && (
              <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="font-semibold text-xl">Change Location</h1>
                  <span
                    onClick={toggleDropdown}
                    className="cursor-pointer text-xl font-bold"
                  >
                    ×
                  </span>
                </div>
                <button
                  onClick={getLocation}
                  className="bg-yellow-500 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-yellow-400 font-semibold"
                >
                  Detect my Location
                </button>
              </div>
            )}
          </div>

          {/* Nav Links */}
          <nav className='flex gap-7 items-center'>
            <ul className='md:flex gap-7 items-center text-lg font-semibold hidden'>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive
                    ? "border-b-2 border-yellow-500 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"} cursor-pointer transition`
                }
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  `${isActive
                    ? "border-b-2 border-yellow-500 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"} cursor-pointer transition`
                }
              >
                <li>Product</li>
              </NavLink>

              <NavLink
                to="/products2"
                className={({ isActive }) =>
                  `${isActive
                    ? "border-b-2 border-yellow-500 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"} cursor-pointer transition`
                }
              >
                <li>Products2</li>
              </NavLink>

              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `${isActive
                    ? "border-b-2 border-yellow-500 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"} cursor-pointer transition`
                }
              >
                <li>About</li>
              </NavLink>

              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `${isActive
                    ? "border-b-2 border-yellow-500 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"} cursor-pointer transition`
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>

            {/* Cart */}
            <Link to={"/Cart"} className="relative">
              <span className='text-2xl text-gray-200'>🛒</span>
              <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm'>
                {cartItem.length}
              </span>
            </Link>

            {/* Login / User */}
            <div className='hidden md:block'>
              <SignedOut>
                <SignInButton className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-1 rounded-md cursor-pointer font-semibold" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden text-3xl ml-2 cursor-pointer select-none text-gray-200' onClick={() => setopenNav(!openNav)}>
              {openNav ? "×" : "≡"}
            </div>
          </nav>
        </div>

        {/* Mobile Nav */}
        {openNav && (
          <div className='md:hidden mt-2 bg-gray-900 border-t border-gray-700 py-4 px-6 shadow-md text-lg font-semibold text-gray-200'>
            <ul className='space-y-4'>
              <li><NavLink to={"/"} onClick={() => setopenNav(false)}>Home</NavLink> </li>
              <li><NavLink to={"/Products"} onClick={() => setopenNav(false)}>Product</NavLink> </li>
              <li><NavLink to={"/Products2"} onClick={() => setopenNav(false)}>Product2</NavLink> </li>
              <li><NavLink to={"/About"} onClick={() => setopenNav(false)}>About</NavLink> </li>
              <li><NavLink to={"/Contact"} onClick={() => setopenNav(false)}>Contact</NavLink> </li>
              <li>
                <SignedOut>
                  <SignInButton className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-1 rounded-md cursor-pointer font-semibold" />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
