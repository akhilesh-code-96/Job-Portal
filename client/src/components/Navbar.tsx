"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu.tsx";
import { cn } from "../utils/cn.ts";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-8" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const role = window.localStorage.getItem("role");
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link to="/">
          <div className="text-gray-50">Home</div>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Job">
          <div className="flex flex-col space-y-4 text-sm">
            {role === "Job Seeker" ||
              (role === null && (
                <Link to="/job-search" className="text-white">
                  Find Job
                </Link>
              ))}
            <Link to="/job-post" className="text-white">
              Post Job
            </Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Category">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Frontend Developer"
              href="/frontend-jobs"
              src="https://makimo.com/wp-content/uploads/2023/08/frontend-skills.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Backend Developer"
              href="/backend-jobs"
              src="https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <Link to="/register">
          <div className="text-gray-50">Register</div>
        </Link>
      </Menu>
    </div>
  );
}
