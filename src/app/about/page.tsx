import React from 'react';

const About: React.FC = () => {
return (
    <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-[var(--accent-color)] mb-6">About Us</h1>
        <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
                At ConsoLearn, we strive to make learning accessible and engaging. Our mission is to
                empower individuals by providing them with the knowledge and skills needed to succeed in the tech world.
            </p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p>
                We aim to build a community where learning is continuous, inclusive, and accessible to everyone,
                no matter their background or experience level.
                </p>
        </section>
    </div>
);
};

export default About;
