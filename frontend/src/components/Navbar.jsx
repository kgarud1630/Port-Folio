import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 mb-10 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <h1 className="font-bold text-xl">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
