import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5 relative z-50">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          
          {/* Newsletter */}
          <div >
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive <span className="font-bold">Updates</span> straight to
              your inbox.
            </p>
            <div className="flex items-center h-10 mt-4">
              <input
                type="text"
                className="py-1 px-3 w-full h-full focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                placeholder="Email"
              />
              <button className="bg-sky-500 px-4 py-1 hover:bg-sky-600 duration-200">
                Send
              </button>
            </div>
          </div>

          {/* Links & Contact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            
            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-3">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="py-8 px-4 col-span-2 sm:col-span-1">
              <h1 className="text-xl font-bold mb-3">Contact Us</h1>
              <div className="flex items-center gap-3">
                <HiLocationMarker />
                <p>Kerala, India</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <MdMessage />
                <p>cba@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <MdCall />
                <p>+91 1</p>
              </div>
            </div>

          </div>
        </div>
        <div className="hidden sm:block">
            <div className="text-center">
                <span className="text-sm text-gray-400 ">
 Copyright &copy; {new Date().getFullYear()} by BC
                </span>
                <div className="flex items-center justify-center gap-4 pb-4">
                    <a href="#">
                        <FaInstagram className="text-4xl"/>
                    </a>
                    <a href="#">
                        <FaFacebook className="text-4xl"/>
                    </a>
                    <a href="#">
<FaLinkedin className="text-4xl"/>
                    </a>
                </div>
                <span className="text-sm text-gray-400 "> 
                    <ul className="flex gap-3">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
