"use client";


// useState → creates a variable that can change
// createContext → creates the shared storage box
// useContext → lets other components open that box
import React, { createContext, useContext, useState } from "react";



// "The box will contain:
// a true/false value called loggedIn
// a function called setLoggedIn that changes it"
type AppContextType = {
    isLoggedIn:boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}


// Create the empty box
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider
// This creates the component that fills the box and gives it to everything inside.
export function AppProvider({children}: {children: React.ReactNode} ) {

    //Actual variable
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        // "Everything inside me gets access to these two things."
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {/* "Whatever components are placed inside AppProvider." */}
            {children}
        </AppContext.Provider>
    );

}

// you can simply write:
export function useApp() {

    // Instead of every component writing: + This opens the box.
    const context = useContext(AppContext)

    if (!context){
        throw new Error("useApp must be inside AppProvider")
    }

    return context;
}


// The whole thing in one picture:
// AppProvider
//      |
//      |
//  creates:
//  loggedIn = false
//  setLoggedIn()
//      |
//      |
//  puts them into Context
//      |
//      |
//  ---------------------
//  |        |           |
// Navbar   Page     Dashboard
//  |        |           |
// useApp() useApp()  useApp()

// The entire purpose of this file is:

// Create a variable once, store it somewhere shared, and give any component inside the provider permission to read or change it.