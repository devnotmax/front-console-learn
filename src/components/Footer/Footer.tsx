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
                href="/course/538868e1-7bae-4ed3-8684-6126275317aa"
                className="hover:text-[var(--primary)]"
              >
                React Development 
              </Link>
            </li>
            <li>
              <Link
                href="/course/a43290e7-4b0d-49da-a16e-a15168ad7beb"
                className="hover:text-[var(--primary)]"
              >
                Python for Beginners
              </Link>
            </li>
            <li>
              <Link
                href="/course/041474fb-f409-4e1f-9e24-d8a88652cc6e"
                className="hover:text-[var(--primary)]"
              >
                Django Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/course/b31b0aa9-5339-43f5-ad55-04e905c13130"
                className="hover:text-[var(--primary)]"
              >
                Basic Web Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Carreras
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
        </div> */}

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
