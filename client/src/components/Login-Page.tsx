import React from "react";
import { LoginForm } from "./ui/loginForm";

const Login = ({name}) => (
  <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="absolute top-32 mt-[-8px] z-10">
      <LoginForm name={name}/>
    </div>
  </div>
);

export default Login;
