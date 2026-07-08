"use client";


import { useState } from "react";
import { useApp } from "@/context/AuthContext";
import { useRouter } from "next/navigation";




function LogInButton() {

  const {setIsLoggedIn } = useApp();
  const router = useRouter();

  const handleClick = () => {
    setIsLoggedIn(true);    
    router.push("/profile")
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-white font-medium transition bg-amber-500`}
    >
      Log In?
    </button>
  );
}



export default function LoginPage(){
    return (
        <main>
            <div>
            -- Log in goes here --

            <LogInButton />

            </div>
        </main>
    )
}