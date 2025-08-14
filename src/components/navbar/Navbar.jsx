import React from "react";

const Navbar = () => {
  return (
    <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 text-white font-bold">
            <img src="" alt="Logo" className="w-10 h-10" />
            <span>SpaceCo</span>
          </div>

          {/* Nav Links */}
          <div className="text-white">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Galaxy</a>
              </li>
              <li>
                <a href="#">Satellite</a>
              </li>
            </ul>
            <div>
                <button className="text-white border-2 border-white px-3 py-1 rounded-md">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
