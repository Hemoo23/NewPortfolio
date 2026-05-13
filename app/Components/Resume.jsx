import { motion } from "framer-motion";

export const Resume = () => {
  return (
    <section id="resume" className="relative px-6 pt-32 md:px-6 md:pt-32 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once:true }}
                className="mb-16"
            >
                <p className="text-red-400 tracking-[0.3em] mb-4">
                    RESUME
                </p>
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                    Experience & Journey
                </h2>
                <p className="text-gray-400 mt-6 max-w-2xl leading-8 text-lg">
                    My Educational Background, Certifications, Technical Experience And Professional Strenghts.
                </p>
            </motion.div>
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Education */}
                <ResumeCard title="Education">
                <ResumeItem
                    title="AM Jain College"
                    subtitle="Bachelor of Commerce in Computer Applications"
                    extra="2019 - 2022"
                />
                <ResumeItem
                    title="CGPA"
                    subtitle="6.6"
                />
                </ResumeCard>
                {/* Experience */}
                <ResumeCard title="Experience">
                <ResumeItem
                    title="Miramed Ajuba"
                    subtitle="Ar Analyst - Medical Billing"
                    extra="2022 - 2024"
                />
                <ul className="text-gray-400 leading-8 t-4">
                    <li>• Managed 50+ Ambulance Claims Daily</li>
                    <li>• Denial Management & AR Follow-Up</li>
                    <li>• Insurance Verification & Payment Resolution</li>
                    <li>• Worked in Fast Paced Healthcare Environment</li>
                </ul>
                </ResumeCard>
                {/* Certifications */}
                <ResumeCard title="Certificates">
                    <ResumeItem
                        title="DotNet Developer"
                        subtitle="UNIQ Technologies, Chennai"
                    />
                    <ResumeItem
                        title="Python Full Stack"
                        subtitle="Login360, Chennai"
                    />                    
                </ResumeCard>
                {/* Soft Skills */}
                <ResumeCard title="Soft Skills">
                    <div className="flex flex-wrap gap-4">
                        <SkillPill text="Problem Solving"/>
                        <SkillPill text="Communication"/>
                        <SkillPill text="Learning Agility"/>
                        <SkillPill text="Adaptability"/>
                        <SkillPill text="Team Work"/>
                    </div>
                </ResumeCard>
            </div>
        </div>
    </section>
  )
}

function ResumeItem({ title, subtitle, extra }) {
  return (
    <div>

      <div className="
        flex
        justify-between
        items-start
        gap-4
      ">

        <div>

          <h4 className="
            text-xl
            font-bold
            mb-2
          ">
            {title}
          </h4>

          <p className="
            text-gray-400
            leading-7
          ">
            {subtitle}
          </p>

        </div>

        {extra && (
          <span className="
            text-red-400
            text-sm
            whitespace-nowrap
          ">
            {extra}
          </span>
        )}

      </div>

    </div>
  );
}

/* ====================================== */

function SkillPill({ text }) {
  return (
    <div className="
      px-5
      py-3
      rounded-full
      bg-red-500/10
      border
      border-red-500/20
      text-red-300
      text-sm
      hover:bg-red-500/20
      transition
      cursor-default
    ">
      {text}
    </div>
  );
}

function ResumeCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}

      className="
        glass
        rounded-[2rem]
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-red-500/40
        hover:shadow-[0_0_35px_rgba(255,0,85,0.18)]
      "
    >

      <h3 className="
        text-3xl
        font-black
        mb-8
      ">
        {title}
      </h3>

      <div className="space-y-6">
        {children}
      </div>

    </motion.div>
  );
}