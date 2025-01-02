import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logoDark from '../assets/logo_dt.png';
import logoLight from '../assets/logo_lt.png';
import iconDark from '../assets/icon.png'; // For dark theme responsive logo
import iconLight from '../assets/icon_lt.png'; // For light theme responsive logo

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <nav className="bg-lightBackground dark:bg-darkBackground px-4 py-2 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    {/* Desktop Logo */}
                    <img
                        src={theme === 'dark' ? logoDark : logoLight}
                        alt="Logo"
                        className="h-10 hidden md:block"
                    />
                    {/* Responsive Logo */}
                    <img
                        src={theme === 'dark' ? iconDark : iconLight}
                        alt="Icon Logo"
                        className="h-8 block md:hidden"
                    />
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 text-lightText dark:text-darkText">
                    <li className="hover:text-primary cursor-pointer">Home</li>
                    <li className="hover:text-primary cursor-pointer">About</li>
                    <li className="hover:text-primary cursor-pointer">Projects</li>
                    <li className="hover:text-primary cursor-pointer">Contact</li>
                </ul>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="hidden md:block px-3 py-1 bg-accent text-white rounded hover:bg-primary"
                >
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-lightText dark:text-darkText"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-lightBackground dark:bg-darkBackground py-2 shadow-md">
                    <ul className="space-y-2 text-center text-lightText dark:text-darkText">
                        <li className="hover:text-primary cursor-pointer">Home</li>
                        <li className="hover:text-primary cursor-pointer">About</li>
                        <li className="hover:text-primary cursor-pointer">Projects</li>
                        <li className="hover:text-primary cursor-pointer">Contact</li>
                    </ul>
                    {/* Mobile Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-full mt-2 px-3 py-1 bg-accent text-white rounded hover:bg-primary"
                    >
                        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
