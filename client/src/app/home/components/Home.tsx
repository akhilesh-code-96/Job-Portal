import React, { useState } from "react";
import FlipWordsComponent from "../../../components/FlipWords";
import AnimatedTooltipPreview from "../../../components/Tooltip";
import MovingBorderButton from "../../../components/MovingBorderButton";
import MovingBorderButton1 from "../../../components/MovingBorderButton1";
import { HeroHighlightDemo } from "../../../components/Hero-Section";
import { Spotlight } from "../../../components/ui/Spotlight";

export function Home() {
  const role = window.localStorage.getItem("role");

  return (
    <>
      <div
        className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>

        <div>
          <Spotlight />
        </div>
        {/* FlipWordsComponent */}
        <div className="absolute top-[-9px] left-4 ml-4">
          <FlipWordsComponent />
          <div className="absolute left-4">
            <AnimatedTooltipPreview />
          </div>
          <div className=" flex absolute top-[500px] left-4 space-x-3">
            {!role ? (
              <>
                <MovingBorderButton name="Job Seeker's Login" />
                <MovingBorderButton1 name="Recruiter's Login" />
              </>
            ) : (
              <>
                {role === "Job Seeker" && (
                  <MovingBorderButton
                    name={role ? "Logout" : "Job Seeker's Login"}
                  />
                )}
                {role === "Recruiter" && (
                  <MovingBorderButton1
                    name={role ? "Logout" : "Recruiter's Login"}
                  />
                )}
              </>
            )}
          </div>
        </div>

        {/* Adjusted positioning for CodeSnippetUI */}
        {/* <div className="absolute top-[60.4px] right-9 mr-4">
          <DirectionAwareHoverPreview />
        </div> */}
        {/* <div
          className="absolute top-[150px] right-10 rounded-[10px] flex flex-col h-[350px] w-[640px] overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(-110px) rotateY(-14deg)",
            boxShadow: "0 0 0px rgba(255, 255, 255, 0.5)",
          }}
        >
          <div className="flex items-center justify-between px-3 py-1 text-white bg-gray-800">
            <div className="flex items-center h-[20px] space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <CodeSnippetUI />
        </div> */}
      </div>
      <HeroHighlightDemo />
    </>
  );
}
