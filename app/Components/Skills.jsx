import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaDocker, FaHtml5, FaCss3, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDotnet, SiMysql } from "react-icons/si";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";

export const Skills = () => {
  return (
    <section id="skills" className="relative px-8 pt-22 md:px-6 md:pt-24 overflow-hidden">
      {/* Ambient Glow */}

      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[150px] rounded-full" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          intial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center"
        >
          <p className="text-red-400 tracking-[0.3em] mt-8">Skills</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mt-4">My Tech Arsenal</h2>
          <p className="text-gray-400 mt-6 max-w-2xl leading-8 text-lg mt-2">Technologies and tools I use to craft immersive, scalable and modern web experiences.</p>
        </motion.div>

        {/* Skill Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillCard
            icon={<FaReact />}
            title="React"
            level="92%"
          />

          <SkillCard
            icon={<FaDocker />}
            title="Docker"
            level="70%"
          />

          <SkillCard
            icon={<SiTailwindcss />}
            title="Tailwind CSS"
            level="90%"
          />

          <SkillCard
            icon={<SiDotnet />}
            title="ASP.NET Core"
            level="82%"
          />

          <SkillCard
            icon={<SiMysql />}
            title="MySQL"
            level="80%"
          />

          <SkillCard
            icon={<DiMsqlServer />}
            title="SQL Server"
            level="78%"
          />

          <SkillCard
            icon={<TbBrandCSharp />}
            title="C#"
            level="75%"
          />

          <SkillCard
            icon={<FaPython />}
            title="Python"
            level="90%"
          />

          <SkillCard
            icon={<SiJavascript />}
            title="JavaScript"
            level="88%"
          />

          <SkillCard
            icon={<FaGitAlt />}
            title="Git"
            level="86%"
          />

          <SkillCard
            icon={<DiVisualstudio />}
            title="VisualStudio"
            level="86%"
          />

          <SkillCard
            icon={<VscVscodeInsiders />}
            title="Vs Code"
            level="85%"
          />

        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon, title, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}

      className="
        glass
        rounded-3xl
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-red-500/40
        hover:shadow-[0_0_35px_rgba(255,0,85,0.25)]
      "
    >

      {/* ICON */}

      <div className="
        text-5xl
        text-red-400
        mb-6
      ">
        {icon}
      </div>

      {/* TITLE */}

      <div className="
        flex
        justify-between
        items-center
        mb-4
      ">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <span className="text-red-400 font-semibold">
          {level}
        </span>

      </div>

      {/* PROGRESS BAR */}

      <div className="
        w-full
        h-3
        rounded-full
        bg-white/10
        overflow-hidden
      ">

        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-red-500
            to-pink-500
            red-glow
          "
          style={{ width: level }}
        />

      </div>

    </motion.div>
  );
}