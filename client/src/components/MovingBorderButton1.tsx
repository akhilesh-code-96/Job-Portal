"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export default function MovingBorderButton1({ name }) {
  return (
    <div>
      <Button
        borderRadius="1.33rem"
        className="bg-white dark:bg-[#18282b] text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {name}
      </Button>
    </div>
  );
}