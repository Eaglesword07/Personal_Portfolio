import { useState, useEffect, useRef } from "react";
import { useTheme } from "@contexts/ThemeContext";
import { THEME_CONFIG } from "@constants/theme";


export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [ isExpanded, setIsExpanded ] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
        }, []
    );

    const handleThemeToggle = (selectedTheme) => {
        toggleTheme(selectedTheme);
        setIsExpanded(false);
    };

    const ActiveIcon = THEME_CONFIG[theme]?.Icon || THEME_CONFIG.light.Icon;

    return (
        <div ref={containerRef}
            className="absolute bottom-9 left-3 sm:bottom-1 sm:left-2 lg:bottom-1 lg:left-2 z-0 
                flex items-center gap-0 p-1 rounded-full
                text-gray-950/5 bg-gray-950/5 shadow-gray-400/50
                dark:bg-white/30 dark:text-white dark:border-gray-700/50 dark:shadow-gray-800/50" >
            {!isExpanded ? (
                <span onClick={() => setIsExpanded(true)}>
                    <ActiveIcon
                        aria-label={THEME_CONFIG[theme].label}
                        className={`${THEME_CONFIG[theme].base} ${ THEME_CONFIG[theme].active}`}
                    />
                </span>
            ) : (
                Object.entries(THEME_CONFIG).map(
                    ([key, { Icon, label, base, active, inactive }]) => (
                        <span key={key}>
                            <Icon
                                aria-label={label}
                                onClick={() => handleThemeToggle(key)}
                                className={`${base} ${
                                    theme === key ? active : inactive
                                }`}
                            />
                        </span>
                    )
                )
            )}
        </div>
    );
};