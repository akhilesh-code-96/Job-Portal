"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";

export default function MovingBorderButton({ name }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-[#12151d] text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {name}
      </Button>
    </div>
  );
}