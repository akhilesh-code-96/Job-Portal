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
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Jobs">
          <div className="flex flex-col space-y-4 text-sm">
            <Link to="/find-jobs">
              <HoveredLink>Find Jobs</HoveredLink>
            </Link>
            <Link to="post-jobs">
              <HoveredLink>Post Jobs</HoveredLink>
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
            {/* <ProductItem
              title="DeveOps Engineer"
              href="/devops-jobs"
              src="https://blog.brokee.io/content/images/2023/12/devopsvsdeveloper--1-.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Block-Chain Engineer"
              href="/blockchain-jobs"
              src="https://miro.medium.com/v2/resize:fit:1400/1*Y49s04yejf6CKcKnzueGLg.jpeg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            /> */}
          </div>
        </MenuItem>
        <Link to="/register">
          <div className="text-gray-50">Register</div>
        </Link>
      </Menu>
    </div>
  );
}
