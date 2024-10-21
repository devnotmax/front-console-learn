import CourseCard from '../CourseCard/CourseCard';
import cursos from '@/Mocks/CourseMocks';

const CoursesPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {cursos.map((course) => (
            <CourseCard key={course.id} {...course} />
            ))}
        </div>
        );
    };