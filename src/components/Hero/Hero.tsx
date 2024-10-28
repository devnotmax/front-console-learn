import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center flex-col items-center min-h-[40vh]">
      <h1 className="text-6xl font-bold ">
        Conso<span className="text-[var(--accent-color)] text-7xl font-fira-code">learn</span>
      </h1>
      <p className="text-xl text-[var(--foreground)]">
        Your space to master code and innovation.
      </p>
      <div className="p-2 gap-2 flex">
        <Link href="/course">
          <button className="primary-btn p-2">Explore courses</button>
        </Link>
        <Link href={"/contact"}>
          <button className="secondary-btn p-2">Contact</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
