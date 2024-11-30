"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { useHandleNavigation } from "./custom/moving-borders-utility.hook";

export default function MovingBorderButton1({ name }) {
  const handleNavigation = useHandleNavigation();
  return (
    <div>
      <Button
        onClick={() => handleNavigation(name)}
        borderRadius="1.33rem"
        className="bg-white dark:bg-[#18282b] text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {name}
      </Button>
    </div>
  );
}
