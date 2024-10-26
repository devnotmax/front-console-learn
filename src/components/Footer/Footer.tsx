import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--principal-text)] py-8 px-4 font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y Redes Sociales */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-[var(--primary)]">
            ConsoLearn
          </h1>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--principal-text)] hover:text-[var(--primary)]"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--principal-text)] hover:text-[var(--primary)]"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--principal-text)] hover:text-[var(--primary)]"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--principal-text)] hover:text-[var(--primary)]"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Cursos */}
        <div>
          <h2 className="font-semibold text-lg text-[var(--primary)] mb-2">
            Courses
          </h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/cursos/ui-design"
                className="hover:text-[var(--primary)]"
              >
                UI Design
              </Link>
            </li>
            <li>
              <Link
                href="/cursos/ux-design"
                className="hover:text-[var(--primary)]"
              >
                UX Design
              </Link>
            </li>
            <li>
              <Link
                href="/cursos/wireframing"
                className="hover:text-[var(--primary)]"
              >
                Wireframing
              </Link>
            </li>
            <li>
              <Link
                href="/cursos/diagramming"
                className="hover:text-[var(--primary)]"
              >
                Diagramming
              </Link>
            </li>
          </ul>
        </div>

        {/* Carreras */}
        <div>
          <h2 className="font-semibold text-lg text-[var(--primary)] mb-2">
            Carrers
          </h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/carreras/design"
                className="hover:text-[var(--primary)]"
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                href="/carreras/prototyping"
                className="hover:text-[var(--primary)]"
              >
                Prototyping
              </Link>
            </li>
            <li>
              <Link
                href="/carreras/dev-features"
                className="hover:text-[var(--primary)]"
              >
                Development Features
              </Link>
            </li>
            <li>
              <Link
                href="/carreras/design-systems"
                className="hover:text-[var(--primary)]"
              >
                Design Systems
              </Link>
            </li>
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h2 className="font-semibold text-lg text-[var(--primary)] mb-2">
            Resources
          </h2>
          <ul className="space-y-1">
            <li>
              <Link href="/blog" className="hover:text-[var(--primary)]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/best-practices" className="hover:text-[var(--primary)]">
                Best Practices
              </Link>
            </li>
            <li>
              <Link href="/colors" className="hover:text-[var(--primary)]">
                Colors
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-[var(--primary)]">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} ConsoLearn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
