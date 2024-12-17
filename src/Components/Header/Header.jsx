import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FiNIT_Logo from '../../assets/FiNIT_Logo.jpg'
import './Header.css'

function Header() {
  return (
    <>
      <header className="fixed z-50 top-4 w-full lg:px-12">
            <nav className="shadow bg-transparent rounded-2xl border-gray-200 px-4 lg:px-6 py-2.5 bg-black">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={FiNIT_Logo}
                            className="object-cover w-16 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white hover:bg-gray-500  focus:ring-1 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-purple-600 hover:bg-purple-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Read Blogs
                        </Link>
                    </div>
                    <div
                        className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-teal-300": "text-white"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-teal-300": "text-white"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                to="team"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-teal-300": "text-white"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
                                    }
                                >
                                    Team
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="events"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-teal-300": "text-white"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`
                                    }
                                >
                                    Events
                                </NavLink>
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header