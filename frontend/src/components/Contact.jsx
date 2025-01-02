import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to an API)
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset form status after 3 seconds
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-16 bg-lightBackground dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-extrabold text-center text-darkText dark:text-white mb-12">
                    Contact Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-accent mb-4">Get in Touch</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-darkText dark:text-gray-300"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-lightBackground dark:bg-darkBackground text-darkText dark:text-white focus:ring-accent focus:border-accent"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-darkText dark:text-gray-300"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-lightBackground dark:bg-darkBackground text-darkText dark:text-white focus:ring-accent focus:border-accent"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-darkText dark:text-gray-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-lightBackground dark:bg-darkBackground text-darkText dark:text-white focus:ring-accent focus:border-accent"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-accent text-white rounded-md hover:bg-primary transition"
                            >
                                Send Message
                            </button>
                            {submitted && (
                                <p className="mt-4 text-sm text-green-500">
                                    Thank you! Your message has been sent.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col justify-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-accent mb-4">My Contact Info</h3>
                        <p className="text-sm text-darkText dark:text-gray-300 mb-2">
                            <strong>Email:</strong> ndivhuswiswi@example.com
                        </p>
                        <p className="text-sm text-darkText dark:text-gray-300 mb-2">
                            <strong>Phone:</strong> +123 456 7890
                        </p>
                        <p className="text-sm text-darkText dark:text-gray-300">
                            <strong>Location:</strong> Johannesburg, South Africa
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
