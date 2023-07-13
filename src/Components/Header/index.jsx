import React from "react";
import { NavLink } from "react-router-dom";
import TextInput from "../TextInput";

const Header = () => {
  return (
    <header className="px-3 py-3 flex justify-between items-center border-b border-[#ddd]">
      <span className="text-xl">Meetup</span>
      <div>
        <TextInput inputPlaceholder="Search By Title" />
      </div>
    </header>
  );
};

export default Header;
