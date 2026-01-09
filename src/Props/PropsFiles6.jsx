import React from 'react'
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClipboardCopy, Clipboard } from 'lucide-react';

function PropsFiles6() {
    const [copied, setcopied] = useState(false);
    const copycode = () => {
        navigator.clipboard.writeText(codestring);
        setcopied(true);
        setTimeout(() => setcopied(false), 2000);
    }
    const codestring = `
    import {createContext,useContext, useEffect, useState} from "react";

const ThemeContext = createContext();
 export const ThemeProvider = ({ children})=>{
     const [theme,setTheme] = useState(()=> localStorage.getItem('theme')||'light')

     useEffect(()=>{
        document.documentElement.classList.remove(theme === 'light' ? "dark" :"light");
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme',theme);
     },[theme]);

     const toggleTheme =()=>{
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
     };

     return(
        <ThemeContext.Provider value={{ theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
     );
 };

 export const useTheme = () => useContext(ThemeContext); `

    return (
        <div>
            <button
                onClick={copycode}
                className="absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-2 text-sm hover:bg-gray-700  "
            >
                {copied ? <ClipboardCopy /> : <Clipboard />}
                {copied ? "Copied!" : "Copy"}
            </button>
            <SyntaxHighlighter
                language='javascript'
                style={oneDark}
                showLineNumbers
            >
                {codestring}
            </SyntaxHighlighter>
        </div>
    )
}

export default PropsFiles6