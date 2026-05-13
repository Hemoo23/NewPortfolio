import { Link } from "react-router";
import { useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Resume",
      path: "#resume",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav
      className="
        glass
        bg-black/30
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        w-[92%]
        max-w-7xl
        rounded-2xl
        px-6
        py-4
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-red-500
              flex
              items-center
              justify-center
              font-bold
              text-sm
              red-glow
            "
          >
            {"</>"}
          </div>

          <h1
            className="
              font-bold
              tracking-wide
              text-sm
              sm:text-base
            "
          >
            HEMACHANDRAN
          </h1>

        </Link>

        {/* DESKTOP NAV */}

        <ul
          className="
            hidden
            md:flex
            gap-10
            text-sm
            text-gray-300
          "
        >

          {navItems.map((item, index) => (

            <li key={index}>

              <a
                href={item.path}
                className="
                  relative
                  hover:text-red-400
                  transition
                  duration-300

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-red-500
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          {/* DESKTOP RESUME BUTTON */}

          <a
            href="/public/Hemachandran.K.pdf"
            target="_blank"
            rel="noopener noreferrer"

            className="
              hidden
              md:flex
              red-button
              px-5
              py-2
              rounded-xl
              text-sm
              font-medium
              items-center
              justify-center
            "
          >
            Resume
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              text-3xl
              text-white
            "
          >

            {menuOpen ? (
              <HiOutlineX />
            ) : (
              <HiOutlineMenuAlt3 />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              md:hidden
              mt-6
              glass
              rounded-2xl
              p-6
              border
              border-red-500/20
            "
          >

            <ul
              className="
                flex
                flex-col
                gap-6
                text-gray-300
              "
            >

              {navItems.map((item, index) => (

                <li key={index}>

                  <a
                    href={item.path}

                    onClick={() => setMenuOpen(false)}

                    className="
                      block
                      text-lg
                      hover:text-red-400
                      transition
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

            {/* MOBILE RESUME BUTTON */}

            <a
              href="/public/Hemachandran.K.pdf"
              target="_blank"
              rel="noopener noreferrer"

              className="
                mt-8
                red-button
                w-full
                py-3
                rounded-2xl
                text-center
                font-medium
                block
              "
            >
              Download Resume
            </a>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
};