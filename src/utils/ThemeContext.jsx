import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('system');

    // Apply theme to document.documentElement
    const applyTheme = (themeToApply) => {
        if (themeToApply === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Detect system theme preference
    const getSystemTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Initialize theme from localStorage or system
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
            setTheme(savedTheme);
            if (savedTheme === 'system') {
                applyTheme(getSystemTheme());
            } else {
                applyTheme(savedTheme);
            }
        } else {
            setTheme('system');
            applyTheme(getSystemTheme());
        }
    }, []);

    // Update theme when theme state changes
    useEffect(() => {
        if (theme === 'system') {
            applyTheme(getSystemTheme());
        } else {
            applyTheme(theme);
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
