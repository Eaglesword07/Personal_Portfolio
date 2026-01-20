import { useTheme } from "@utils/ThemeContext";
import { Sun, MoonStar, MonitorCog } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const handleThemeToggle = (selectedTheme) => {
        toggleTheme(selectedTheme);
    };

    return (
        <div className="absolute bottom-0 left-0 z-0 flex items-center gap-1 p-1 rounded-full
                text-gray-950/5 bg-gray-950/5 shadow-gray-400/50
                dark:bg-white/30 dark:text-white dark:border-gray-700/50 dark:shadow-gray-800/50" >
            <span>
                <Sun 
                onClick={() => handleThemeToggle('light')}
                className={`rounded-full p-1 text-gray-950 fill-orange-700/60 hover:fill-orange-950
                dark:hover:fill-white dark:text-yellow-200 
                ${theme === 'light' ? 'bg-orange-100 shadow-md' : 'ring-gray-950/10'}`}
                aria-label="Light mode" />
            </span>
            <span>
                <MonitorCog 
                onClick={() => handleThemeToggle('system')}
                className={`rounded-full p-1 text-gray-500 fill-gray-400/60 hover:fill-gray-950
                dark:text-white/30 ${theme === 'system' ? 'bg-gray-700/60 shadow-md' : ''}`}
                aria-label="System mode"
                />
            </span>
            <span>
                <MoonStar
                onClick={() => handleThemeToggle('dark')}
                className={`rounded-full p-1 text-blue-950 fill-slate-800/60 hover:fill-stone-400
                dark:text-blue-100/50 dark:fill-slate-400 dark:hover:fill-gray-800 
                ${theme === 'dark' ? 'bg-gray-700/60 shadow-md' : ''}`}
                aria-label="Dark mode" />
            </span>
        </div>
    )
}