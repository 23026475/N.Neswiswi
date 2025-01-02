import React, { useState, useEffect } from 'react';

const FixedFooter = () => {
    const [showFooter, setShowFooter] = useState(false);
    const [buttonText, setButtonText] = useState("ndivhuswiswi@example.com"); // Replace with your email
    const email = "ndivhuswiswi@example.com"; // Replace with your email

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setButtonText("Copied!");
        setTimeout(() => setButtonText(email), 2000); // Reset text after 2 seconds
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if user is out of Hero and Footer sections
            const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
            const footer = document.querySelector("footer");
            const footerTop = footer?.getBoundingClientRect()?.top || Infinity;

            setShowFooter(window.scrollY > heroHeight && footerTop > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        showFooter && (
            <div className="fixed bottom-4 right-4 bg-accent text-white px-4 py-2 rounded shadow-lg">
                <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 hover:bg-primary transition px-3 py-1 rounded"
                >
                    <span>{buttonText}</span>
                </button>
            </div>
        )
    );
};

export default FixedFooter;
