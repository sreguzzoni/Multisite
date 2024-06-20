import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">My Next.js Site</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/professional/intro">
              <a className="text-white hover:text-gray-200">Intro</a>
            </Link>
          </li>
          <li>
            <Link href="/professional/work-experience">
              <a className="text-white hover:text-gray-200">Work Experience</a>
            </Link>
          </li>
          <li>
            <Link href="/professional/study">
              <a className="text-white hover:text-gray-200">Study</a>
            </Link>
          </li>
          <li>
            <Link href="/professional/skills">
              <a className="text-white hover:text-gray-200">Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/professional/timeline">
              <a className="text-white hover:text-gray-200">Timeline</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
