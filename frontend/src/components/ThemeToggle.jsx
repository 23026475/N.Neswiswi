import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-lightBackground dark:bg-gray-800 shadow hover:shadow-lg transition"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <MoonIcon className="h-6 w-6 text-gray-700 dark:text-white" />
            ) : (
                <SunIcon className="h-6 w-6 text-yellow-500" />
            )}
        </button>
    );
};

export default ThemeToggle;
