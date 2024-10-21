import CourseHero from "@/components/CourseHero/CourseHero";
import Carousel from "@/components/Carrousel/Carrousel";
import FilterableProductList from "@/components/Filter/Filter";

const CoursesPage: React.FC = () => {

  return (
    <main className="w-full h-full">
      {/* Hero section del curso */}
      <CourseHero />

      {/* Sección de cursos más populares */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">
          Nuestros cursos{" "}
          <span className="text-[var(--primary)]">
            más populares🔥🔥
          </span>
        </h2>
      </div>

      {/* Carousel de cursos populares */}
      <Carousel />

      {/* Cards de cursos populares */} 
      <FilterableProductList />
    </main>
  );
};

export default CoursesPage;
