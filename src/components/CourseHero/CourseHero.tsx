const CourseHero = () => {
  return (
    <section className="flex justify-center flex-col items-center min-h-[50vh]">
      <h1 className="text-6xl font-bold">
        Explora Nuestros{" "}
        <span className="text-[var(--primary)]">Cursos</span>
      </h1>
      <p className="text-xl text-[var(--foreground)]">
        Conocimiento para todos los niveles. Encuentra el curso ideal para ti.
      </p>
    </section>
  );
};

export default CourseHero;
