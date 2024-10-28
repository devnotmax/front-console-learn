import React from 'react';

const ProfileCertifications = () => {
const certifications = [
    { id: 1, title: 'Certificación en TypeScript', date: '2022-12-20', status: 'active' },
    { id: 2, title: 'Certificación en Tailwind CSS', date: '2023-03-18', status: 'deactivated' },
];

return (
<div className="bg-[var(--card-color)] p-4 rounded-lg">
    <h3 className="text-lg font-medium mb-4 text-[var(--principal-text)]">My Certifications</h3>
    <ul>
    <table className="w-full text-left">
        <thead>
        <tr>
            <th className="p-2 text-[var(--secondary-text)]">Title</th>
            <th className="p-2 text-[var(--secondary-text)]">Date</th>
            <th className="p-2 text-[var(--secondary-text)]">Status</th>
        </tr>
        </thead>
        <tbody>
        {certifications.map((cert) => (
            <tr key={cert.id}>
            <td className="p-2 text-[var(--primary)]">{cert.title}</td>
            <td className="p-2 text-[var(--primary)]">{cert.date}</td>
            <td className="p-2">
                <span
                className={`px-2 py-1 text-xs rounded ${
                    cert.status === 'deactivated' ? 'bg-red-500' : 'bg-green-500'
                } text-[var(--principal-text)]`}
                >
                {cert.status}
                </span>
            </td>
            </tr>
        ))}
    </tbody>
    </table>
    </ul>
</div>
);
};

export default ProfileCertifications;
