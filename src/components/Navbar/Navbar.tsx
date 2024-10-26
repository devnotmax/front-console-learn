// components/Navbar.tsx
import ActiveLink from "@/helpers/activeLink";
import Link from "next/link";
import UserWidget from "../userWidget/userWidget";

const Navbar = () => {
  return (
    <nav className="bg-[var(--background)] text-[var(--principal-text)] font-bold font-poppins h-20 flex justify-between items-center px-4">
      {/* logo */}
      <div className="flex items-center justify-center">
        <Link href="/">
          <h1 className="text-3xl font-bold font-fira-code text-white flex items-center justify-center">
            ConsoLearn <i className='bx bx-code-alt text-[var(--accent-color)]'></i>
          </h1>
        </Link>
      </div>

      {/* menu */}
      <div className="flex space-x-4 justify-center items-center">
        <ul className="flex space-x-4">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/course">Courses</ActiveLink>
          <ActiveLink href="/comunity">Comunity</ActiveLink>
          <ActiveLink href="/about">About us</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </ul>

        {/* Botones */}
        <div className="flex space-x-3">
          <UserWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
