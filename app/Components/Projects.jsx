import { motion } from "framer-motion";

export const Projects = () => {
    return (
        <section id="projects" className="relative px-6 pt-32 md:px-6 md:pt-32 overflow-hidden">
            <div className="absolute left-0 top-20 w-[400px] h-[400px] bg-red-500/10 blur-[140px] rounded-full" />

            <div className="max-x-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-red-400 tracking-[0.3em] mb-4">PROJECTS</p>
                    <h2 className="text-4xl md:text-6xl font-black leading-tight">Featured Works</h2>
                    <p className="text-gray-400 mt-6 max-w-2xl leading-8 text-lg">
                        Full-stack applications focused on scalability,
                        authentication systems, responsive UI and modern
                        web architecture.
                    </p>
                </motion.div>
                {/* Project Grid */}

                <div className="grid lg:grid-cols-2 gap-10">
                    <ProjectCard
                        title="Movie Ticket Booking System"
                        tech={[
                            "ASP.NET Core Web API",
                            "React.Js",
                            "Entity FrameWork",
                            "SQL Server",
                            "MySQL",
                        ]}
                        description="
                        Developed a Full-Stack Movie Ticket Booking Application 
                        featuring movie listings, seat selection, ticket-booking 
                        and booking history with secure Rest-APIs and Responsive UI
                    "
                        features={[
                            "Role-Based Authentication",
                            "RESTful API Architecture",
                            "Responsive React Frontend",
                            "Booking & Seat Management",
                        ]}
                    />

                    <ProjectCard
                        title="JobBoard / Recruitment Portal"
                        tech={[
                            "ASP.NET Core MVC",
                            "ASP.NET Core WebAPI",
                            "JWT Authentication",
                            "SQL Server",
                            "MySQL",
                        ]}
                        description="
                        Built a recruitment platform connecting employers
                        and job seekers with secure authentication, job posting,
                        application tracking and resume management.
                    "
                        features={[
                            "Role-Based Authorization",
                            "JWT Authentication",
                            "Recruiter DashBoard",
                            "Application Tracking",
                        ]}
                    />
                </div>
            </div>

        </section>
    )
}

function ProjectCard({
  title,
  tech,
  description,
  features,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}

      className="
        glass
        rounded-[2rem]
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-red-500/40
        hover:shadow-[0_0_40px_rgba(255,0,85,0.18)]
        group
        relative
        overflow-hidden
      "
    >

      {/* Top Glow */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-red-500
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
        "
      />

      {/* Title */}

      <h3 className="
        text-3xl
        font-black
        mb-6
        text-red-400
      ">
        {title}
      </h3>

      {/* Description */}

      <p className="
        text-gray-400
        leading-8
        mb-8
      ">
        {description}
      </p>

      {/* Tech Stack */}

      <div className="
        flex
        flex-wrap
        gap-3
        mb-8
      ">

        {tech.map((item, index) => (
          <span
            key={index}
            className="
              px-4
              py-2
              rounded-full
              bg-red-500/10
              border
              border-red-500/20
              text-red-300
              text-sm
            "
          >
            {item}
          </span>
        ))}

      </div>

      {/* Features */}

      <div className="space-y-4">

        {features.map((feature, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-3
              text-gray-300
            "
          >

            <div className="
              w-2
              h-2
              rounded-full
              bg-red-500
              red-glow
            " />

            {feature}

          </div>
        ))}

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-10">

        <button className="
          red-button
          px-6
          py-3
          rounded-2xl
        ">
          Live Demo
        </button>

        <button className="
          glass
          px-6
          py-3
          rounded-2xl
          hover:border-red-500/40
          transition
        ">
          GitHub
        </button>

      </div>

    </motion.div>
  );
}