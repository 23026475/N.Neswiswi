import React from 'react';
import ThemeToggle from './ThemeToggle'; // Import the toggle button
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-6">
            <div className="container mx-auto px-4 text-center">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://www.linkedin.com/in/your-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/your-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://twitter.com/your-twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>

                {/* Dark Mode Toggle */}
                <div className="flex justify-center mb-4">
                    <ThemeToggle />
                </div>

                {/* Footer Text */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Ndivhuwo Neswiswi. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
