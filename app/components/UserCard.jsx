"use client"

import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";

function UserCard() {


    // const { user } = useAuth({middleware: 'auth'})
    // console.log(user);


    return (

        <button
            className="hidden md:inline
             bg-slate-900 text-white px-4 
             lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800"
        >
            <Link
                href="/login">
                Login
            </Link>

        </button>
    );
}

export default UserCard;