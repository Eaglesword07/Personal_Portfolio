import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";


export const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if ( darkMode ) {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleDarkMode}>
            {darkMode ? (
                <Sun className="h-15 w-15 text-yellow-600 fill-orange-700/60 hover:fill-orange-950" />
            ) : (
                <Moon className="h-15 w-15 text-blue-950 fill-slate-800/60 hover:fill-stone-400" />
            )}
        </button>
    )
}