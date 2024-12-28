import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            My Portfolio
          </Link>
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
