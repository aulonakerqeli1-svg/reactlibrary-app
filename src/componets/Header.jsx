import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">

        <div className="lg:flex lg:items-center lg:justify-between">

          {/* Logo + Mobile button */}
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto h-6 sm:h-7"
src="data:image/png;base64,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"                
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 dark:text-gray-200"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>

          {/* Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center w-full lg:w-auto`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-8">
                <Link to="/Home" className="px-3 py-2">Home</Link>
                <Link to="/Librat" className="px-3 py-2">Librat</Link>
                <Link to="/Zhanret" className="px-3 py-2">Zhanret</Link>
                <Link to="/Author" className="px-3 py-2">Autoret</Link>
                <Link to="/Dashboard" className="px-3 py-2">Dashbord</Link>
                <Link to="/Register" className="px-3 py-2">Register</Link>
                <Link to="/Login" className="px-3 py-2">Login</Link>

            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                  src="data:image/png;base64,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"
                  className="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;