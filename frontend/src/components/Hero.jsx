import React from 'react';
import backgroundImage from '../assets/background.png';
import profileImage from '../assets/profile_image.jpg';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                    <div className="pattern-dots-md gray-light p-2 rounded-full">
                        <img
                            style={{ transform: 'translate(10px, -10px)' }}
                            src={profileImage}
                            alt="Profile"
                            className="h-40 w-40 md:h-56 md:w-56 rounded-full border-4 border-white shadow-lg"
                        />
                    </div>
                </div>

                {/* Introduction */}
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Hi, I am Ndivhuwo Neswiswi</h1>
                <h2 className="text-lg md:text-xl mb-2">
                    A <span className="text-accent">Frontend Developer</span>,{' '}
                    <span className="text-accent">Web Developer</span>,{' '}
                    <span className="text-accent">Application Developer</span>
                </h2>
                <p className="text-md md:text-lg mb-8">
                    A passionate web and application developer dedicated to crafting professional
                    and impactful digital solutions.
                </p>

                {/* Call-to-Action */}
                <button className="px-6 py-2 bg-accent text-white rounded hover:bg-primary transition">
                    View My Work
                </button>
            </div>

            {/* Separator */}
            <div className="pattern-dots-sm slategray h-5 w-full"></div>
        </section>
    );
};

export default Hero;
