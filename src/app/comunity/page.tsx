import React from 'react';

const Comunity: React.FC = () => {
return (
    <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-[var(--accent-color)] mb-6">Comunity</h1>
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Join Our Comunity</h2>
            <p>Stay updated with the latest news, events, and discussions in ConsoLearn.</p>
    </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <ul className="list-disc list-inside">
                <li>Live Q&A Session - Date & Time</li>
                <li>Web Development Workshop - Date & Time</li>
                <li>Comunity Meetup - Date & Time</li>
            </ul>
        </section>
    </div>
);
};

export default Comunity;
