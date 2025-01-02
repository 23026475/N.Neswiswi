import React from 'react';
import { FaCode, FaDatabase, FaPaintBrush, FaServer, FaMicrosoft } from 'react-icons/fa';

const skills = [
    {
        category: "Programming Languages",
        icon: <FaCode />,
        items: ["C#", "C++", "Java", "Python"],
    },
    {
        category: "Web Technologies",
        icon: <FaPaintBrush />,
        items: ["HTML", "CSS", "JavaScript"],
    },
    {
        category: "Databases",
        icon: <FaDatabase />,
        items: ["MongoDB", "MySQL", "Firebase"],
    },
    {
        category: "Frontend Development",
        icon: <FaPaintBrush />,
        items: ["React", "Vue", "Bootstrap", "Tailwind CSS"],
    },
    {
        category: "Backend Development",
        icon: <FaServer />,
        items: ["Node.js", "XAMPP"],
    },
    {
        category: "Microsoft Certifications",
        icon: <FaMicrosoft />,
        items: [
            "AI Fundamentals",
            "AZ Fundamentals",
            "Excel (Intermediate)",
            "Power BI",
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 bg-gradient-to-b from-lightBackground to-gray-100 dark:from-darkBackground dark:to-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-extrabold text-center text-lightText dark:text-darkText mb-12">
                    My Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-tr from-accent to-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
                        >
                            {/* Icon */}
                            <div className="flex justify-center items-center text-white text-5xl mb-4">
                                {skill.icon}
                            </div>
                            {/* Category */}
                            <h3 className="text-xl font-bold text-white text-center mb-4">
                                {skill.category}
                            </h3>
                            {/* Skills List */}
                            <ul className="text-white text-center space-y-2">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="text-sm md:text-base">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
