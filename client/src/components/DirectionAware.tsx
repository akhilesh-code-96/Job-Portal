"use client";
import React from "react";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export default function DirectionAwareHoverPreview() {
  const imageUrl =
    "https://images.pexels.com/photos/257699/pexels-photo-257699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}
