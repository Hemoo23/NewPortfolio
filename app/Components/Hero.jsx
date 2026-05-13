import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-28 md:px-6 md:pt-8">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <p className="text-red-400 tracking-[0.3em] text-sm md:text-xl font-bold">
            HEY, I'M
          </p>

          <h1 className="text-3xl sm:text-6xl md:text-5xl font-black leading-tight">
            HEMACHANDRAN. K
          </h1>

          <div className="text-2xl md:text-4xl font-bold text-gray-200">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Developer",
                2000,
                "React Developer",
                2000,
                "Dotnet Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 leading-8 max-w-xl">
            .NET Developer focused on building scalable full-stack
            applications using ASP.NET Core, React.js and SQL databases
            with modern UI and clean architecture.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl red-glow">
              View Projects
            </a>
            <a href="#contact" className="glass px-8 py-4 rounded-2xl hover:border-red-500 transition">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass rounded-3xl p-8 overflow-hidden"
        >
          
          <pre className=" text-[11px] md:text-sm  text-gray-300 overflow-x-auto leading-8">
{`const developer = {
  Name: "Hemachandran",
  Role: "Software Developer",
  Skills: ["React", "ASP.NET", "SQL"],
  Passion: "Immersive UI",
}`}
          </pre>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
