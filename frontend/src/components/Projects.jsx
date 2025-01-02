import React from 'react';

const projects = [
    {
        title: "Educare Learning Management System",
        description: "A front-end-only learning management system for educators and students.",
        techStack: ["React", "Figma"],
        link: "#",
    },
    {
        title: "To-Do List",
        description: "A fully functioning to-do list with React and Node.js.",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "#",
    },
    {
        title: "Thrive",
        description: "A platform connecting individuals to socio-psychological support.",
        techStack: ["Figma", "Android Studio", "XAMPP"],
        link: "#",
    },
    {
        title: "Snake Game",
        description: "A Java-based game featuring AI and multiplayer modes.",
        techStack: ["Java", "Eclipse"],
        link: "#",
    },
    {
        title: "Life as it Goes",
        description: "A responsive website providing investment knowledge.",
        techStack: ["HTML", "Bootstrap", "JavaScript"],
        link: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-extrabold text-center text-darkText dark:text-white mb-12">
                    My Projects
                </h2>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-lightBackground dark:bg-darkBackground rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 p-6"
                        >
                            {/* Project Title */}
                            <h3 className="text-xl font-bold text-primary dark:text-accent mb-4">
                                {project.title}
                            </h3>
                            {/* Description */}
                            <p className="text-sm text-darkText dark:text-white mb-4">
                                {project.description}
                            </p>
                            {/* Tech Stack */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-darkText dark:text-gray-300">
                                    Tech Stack:
                                </h4>
                                <ul className="flex flex-wrap gap-2 mt-2">
                                    {project.techStack.map((tech, idx) => (
                                        <li
                                            key={idx}
                                            className="px-3 py-1 bg-accent text-white text-xs rounded-full"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Link */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 text-sm text-primary dark:text-accent underline hover:no-underline"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
