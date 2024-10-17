import CourseHero from "@/components/CourseHero/CourseHero";
import Carousel from "@/components/Carrousel/Carrousel";

const cursos = () => {
  return (
    <main className="w-full h-full">
      <CourseHero />

      <div className="p-4">
        <h2 className="text-2xl font-bold">
          Nuestros cursos{" "}
          <span className="text-[var(--accent-color)]">más populares🔥🔥</span>
        </h2>
      </div>
      <Carousel />
    </main>
  );
};

export default cursos;
