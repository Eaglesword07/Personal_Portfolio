import React from 'react';
import { ThemeToggle } from './Ui/ThemeToggle/ThemeToggle';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white/10 dark:bg-gray-950 text-gray-950 dark:text-white">
            <ThemeToggle />
            <main>
                {children}
            </main>
        </div>
    );
};

export { Layout };
