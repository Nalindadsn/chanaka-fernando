"use client";

import React from "react";
import { FaHome, FaBlog, FaUser, FaEnvelope } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  return (
    <div className="relative w-full">
      <div className="absolute right-4 top-4 z-50">{/* <ThemeToggle /> */}</div>
    </div>
  );
};

export default Navbar;
