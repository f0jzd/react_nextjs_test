"use client";


import { useState } from "react";
import { useApp } from "@/context/AuthContext";



function TestButton() {

   

  const {isLoggedIn, setIsLoggedIn } = useApp();

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);    
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-white font-medium transition bg-amber-500`}
    >
      DOes Nothing
    </button>
  );
}



export default function LoginPage(){
    return (
        <main>
            <div>
            -- Log in goes here --

            <TestButton></TestButton>

            

            </div>
        </main>
    )
}