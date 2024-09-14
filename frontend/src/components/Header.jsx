import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gray-800 text-white py-4 px-4 md:px-6 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold">Note App</div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      <nav
        className={`absolute top-16 left-0 w-full bg-gray-800 md:relative md:top-auto md:flex ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="md:flex space-x-6">
          <Link to="/" className="block py-2 px-4 hover:text-gray-300">
            Home
          </Link>
          <Link
            to="/recycle-bin"
            className="block py-2 px-4 hover:text-gray-300"
          >
            Recycle Bin
          </Link>
        </div>
      </nav>

      <div className="relative hidden md:block">
        <img
          className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
          src="/path-to-avatar.jpg"
          alt="Avatar"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg z-10">
            <ul>
              <li>
                <Link to="/profile" className="block px-4 py-2 text-black">
                  Profile
                </Link>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 text-black">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
