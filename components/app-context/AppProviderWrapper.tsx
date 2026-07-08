"use client";

import { AppProvider } from "@/context/AuthContext";

export default function AppProviderWrapper({
    children,
} : {
    children: React.ReactNode;

}) {
    return <AppProvider>{children}</AppProvider>
}