import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={
        `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
      }
    >
      <div className="w-full flex justify-between item-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kirubel &nbsp;
            <span className="sm:inline-block hidden">| Full-Stack Developer</span>
          </p>
        </Link>
        <ul className="list-none h
        idden sm:flex flex-row items-center gap-8">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/sol4kira"
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium flex items-center gap-1"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="/Kirubel_Solomon_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#915eff] text-white px-4 py-2 rounded-xl text-[15px] font-semibold hover:bg-[#7d48e8] transition-all flex items-center gap-2 shadow-md shadow-[#915eff]/30"
            >
              Resume
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}> {Link.title} </a>
                </li>
              ))}
              <li
                className="text-secondary font-poppins font-medium cursor-pointer text-[16px]"
                onClick={() => setToggle(!toggle)}
              >
                <a
                  href="https://github.com/sol4kira"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li
                className="font-poppins font-semibold cursor-pointer text-[16px]"
                onClick={() => setToggle(!toggle)}
              >
                <a
                  href="/Kirubel_Solomon_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#915eff] flex items-center gap-1"
                >
                  Resume (PDF) &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
