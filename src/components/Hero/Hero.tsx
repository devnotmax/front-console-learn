const Hero: React.FC = () => {
  return (
    <section className="flex justify-center flex-col items-center min-h-[50vh]">
      <h1 className="text-6xl font-bold">
        Conso<span className="text-[var(--primary)]">Learn</span>
      </h1>
      <p className="text-xl text-[var(--foreground)]">
        Tu espacio para dominar el código y la innovación.
      </p>
      <div className="p-2 gap-2 flex">
        <button className="primary-btn p-2">Explorar cursos</button>
        <button className="secondary-btn p-2">Contacto</button>
      </div>
    </section>
  );
};

export default Hero;
