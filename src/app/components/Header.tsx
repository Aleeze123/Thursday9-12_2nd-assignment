"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white shadow fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center">
          <img 
            src="https://th.bing.com/th/id/OIP.6YyVotj-isM8pqnWsjOmAwHaNL?w=1151&h=2048&rs=1&pid=ImgDetMain" 
            alt="Perfume Store Logo" 
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover" 
          />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`flex flex-col md:flex-row items-center w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <Link href="/" className="mb-2">
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition w-full">
                Sign Up
              </button>
            </Link>
            <Link href="/" className="mb-2">
              <FaShoppingCart size={24} className="text-yellow-500 cursor-pointer" />
            </Link>
            <div className="relative mb-2">
              <FaUser size={24} className="text-yellow-500 cursor-pointer" onClick={toggleDropdown} />
              {isDropdownOpen && (
                <div className="absolute right-0 bg-black text-white rounded-md shadow-lg mt-2 z-10">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Profile</Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
