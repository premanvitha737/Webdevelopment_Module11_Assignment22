import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-primary text-white p-4 shadow-md">
      <h1 className="text-2xl font-heading">IELTS Speaking Test</h1>
      <div className="mt-2 md:mt-0 space-x-4">
        <a href="#" className="hover:text-accent transition">Home</a>
        <a href="#" className="hover:text-accent transition">Tests</a>
        <a href="#" className="hover:text-accent transition">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
