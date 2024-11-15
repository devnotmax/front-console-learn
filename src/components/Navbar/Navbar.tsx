"use client";
import ActiveLink from "@/helpers/activeLink";
import Link from "next/link";
import UserWidget from "../userWidget/userWidget";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--background)] text-[var(--principal-text)] font-bold font-poppins h-20 flex justify-between items-center px-4">
      {/* logo */}
      <div className="flex items-center justify-center">
        <Link href="/">
          <h1 className="text-3xl font-bold font-fira-code text-white flex items-center justify-center">
            ConsoLearn <i className="bx bx-code-alt text-[var(--accent-color)]"></i>
          </h1>
        </Link>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      {/* menu */}
      <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'} md:block gap-4`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/course">Courses</ActiveLink>
            <ActiveLink href="/comunity">Comunity</ActiveLink>
            <ActiveLink href="/about">About us</ActiveLink>
        </ul>
        {/* Botones */}
        <div className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 mt-4 md:mt-0">
          <UserWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

