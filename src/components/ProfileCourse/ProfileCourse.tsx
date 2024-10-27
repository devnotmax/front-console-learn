import React from 'react';

const ProfileCourses = () => {
const courses = [
{ id: 1, title: 'Curso de React', date: '2023-01-15', status: 'Completed' },
{ id: 2, title: 'Curso de Next.js', date: '2023-05-10', status: 'In Progress' },
];

return (
<div className="bg-[var(--card-color)] p-4 rounded-lg">
    <h3 className="text-lg font-medium mb-4 text-[var(--principal-text)]">My Courses</h3>
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
        {courses.map((course) => (
            <tr key={course.id}>
            <td className="p-2 text-[var(--primary)]">{course.title}</td>
            <td className="p-2 text-[var(--primary)]">{course.date}</td>
            <td className="p-2">    
                <span className={`px-2 py-1 text-xs rounded ${course.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'} text-[var(--principal-text)]`}>
                {course.status}
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

export default ProfileCourses;
