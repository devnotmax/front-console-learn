const CourseHero = () => {
  return (
    <section className="flex justify-center flex-col items-center min-h-[35vh]">
      <h1 className="text-7xl font-bold">
        Explore Our{" "}
        <span className="text-[var(--accent-color)] text-7xl font-fira-code">
          Courses
        </span>
      </h1>
      <p className="text-xl text-[var(--foreground)] font-medium font-poppins">
        Knowledge for all levels. Find the ideal course for you.
      </p>
    </section>
  );
};

export default CourseHero;
