"use client";


import { useApp } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




function LogOutButton() {

  const {setIsLoggedIn } = useApp();
  const router = useRouter();

  const handleClick = () => {
    setIsLoggedIn(false);    
    router.push("/login")
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-white font-medium transition bg-amber-500`}
    >
      Log Out?
    </button>
  );
}





export default function Profile() {
  return (
    <main>
      <div>This is the profile page</div>

        <LogOutButton />
    </main>
  );
}
