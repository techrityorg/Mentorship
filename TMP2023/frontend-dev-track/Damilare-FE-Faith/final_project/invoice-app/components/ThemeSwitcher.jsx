"use client"

import { useEffect, useState } from "react";

const { useTheme } = require("next-themes");

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
     
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null
    
    return <>
        <h1>current theme : { theme}</h1>
        < button className="bg-black text-white p-10" onClick={() =>setTheme("light")} >Light</button>
        <button className="bg-blue-800 p-10" onClick={() =>setTheme("dark")}>Dark</button>
    </>
}