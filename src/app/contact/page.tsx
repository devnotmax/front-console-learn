import React from 'react';

const Contact: React.FC = () => {
return (
    <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-[var(--accent-color)] mb-6">Contact Us</h1>
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="Your Name"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="Your Email"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                rows={4}
                placeholder="Your Message"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-[var(--accent-color)] text-[var(--principal-text)] py-2 px-4 rounded-lg font-semibold"
            >
                Send Message
            </button>
            </form>
        </section>
    </div>
);
};

export default Contact;