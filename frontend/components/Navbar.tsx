"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, MessageSquareText, UserRound } from "lucide-react";

export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "#",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <UserRound className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "#contact",
            icon: (
                <MessageSquareText className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} className="px-6 py-4 flex justify-evenly text-2xl" />
        </div>
    );
}

