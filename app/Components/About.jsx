import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaDocker, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiDotnet, SiMysql } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";

export const About = () => {
    return (
        <section id="about" className=" px-2 pt-32 md:px-6 md:pt-16">
            <div className="max-w-7xl mx-auto glass rounded-[2rem] p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-red-400 tracking-[0.3em] mb-4 text-center">About Me</p>
                        <h2 className="text-3xl md:text-3xl font-black leading-tight mb-8">Building scalable  <span className="text-red-400">full-stack applications</span> with modern technologies.</h2>
                        <p className="text-gray-400 leading-8 text-lg mb-8">
                            I'm a .NET Full Stack Developer experienced in building
                            web applications using ASP.NET Core, React.js, Entity
                            Framework Core and SQL databases. I enjoy creating
                            responsive interfaces, secure APIs and scalable systems
                            with clean architecture and modern UI experiences.
                        </p>

                        {/* INFO CARD */}

                        <div className="glass rounded-3xl p-6 space-y-5 max-w-md">
                            <InfoRow label="Name" value="Hemachandran K" />
                            <InfoRow label="Role" value=".NET Full Stack Developer" />
                            <InfoRow label="Experience" value="2 Years" />
                            <InfoRow label="Location" value="Chennai, India" />
                            <InfoRow label="Status" value="Open to Opportunities" green />
                        </div>
                    </motion.div>
                    {/* RIGHT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-red-400 tracking-[0.3em] mb-6 text-center">
                            TECH STACK
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

                            <SkillCard
                                icon={<SiDotnet />}
                                title="DotNet"
                            />

                            <SkillCard
                                icon={<FaReact />}
                                title="React"
                            />

                            <SkillCard
                                icon={<FaBootstrap />}
                                title="Bootstrap"
                            />

                            <SkillCard
                                icon={<SiJavascript />}
                                title="JavaScript"
                            />

                            <SkillCard
                                icon={<SiTailwindcss />}
                                title="Tailwind"
                            />

                            <SkillCard
                                icon={<SiMysql />}
                                title="MySQL"
                            />

                            <SkillCard
                                icon={<FaGithub />}
                                title="GitHub"
                            />

                            <SkillCard
                                icon={<DiMsqlServer />}
                                title="SQL Server"
                            />

                            <SkillCard
                                icon={<FaGitAlt />}
                                title="Git"
                            />

                            <SkillCard
                                icon={<FaDocker />}
                                title="Docker"
                            />

                            <SkillCard
                                icon={<BiLogoVisualStudio />}
                                title="VS Code"
                            />

                            <SkillCard
                                icon={<DiVisualstudio />}
                                title="VisualStudio"
                            />
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function InfoRow({ label, value, green }) {
    return (
        <div className="flex justify-between items-center">

            <span className="text-gray-500">
                {label}
            </span>

            <span className={green ? "text-green-400" : "text-white"}>
                {value}
            </span>

        </div>
    );
}

/* -------------------------- */

function SkillCard({ icon, title }) {
    return (
        <div
            className="
        glass
        rounded-2xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        gap-4
        transition
        duration-300
        hover:-translate-y-2
        hover:border-red-500/40
        hover:shadow-[0_0_25px_rgba(255,0,85,0.25)]
      "
        >

            <div className="
        text-4xl
        text-red-400
      ">
                {icon}
            </div>

            <p className="text-gray-200 font-medium">
                {title}
            </p>

        </div>
    );
}