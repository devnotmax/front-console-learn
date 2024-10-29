import CourseHero from "@/components/CourseHero/CourseHero";
import Carousel from "@/components/Carrousel/Carrousel";
import Courses from "@/components/CoursePage/Courses";



const CoursesPage: React.FC = () => {

return (
<main className="w-full h-full font-inter">
    {/* Hero section del curso */}
    <CourseHero />

    {/* Sección de cursos más populares */}
    <div className="p-4">
    <h2 className="text-2xl font-bold">
        Explore our courses {" "}
        <span className="text-[var(--accent-color)]">
        most popular🔥🔥 
        </span>
    </h2>
    </div>

    {/* Carousel de cursos populares */}
    <Carousel />

    {/* Sección de cursos */}
    <Courses />
</main>
);
};

export default CoursesPage;