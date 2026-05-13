import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {

    const form = useRef();

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs
        .sendForm(
            "service_2120pnt",
            "template_qtwp5ps",
            form.current,
            "RhZhWMQeW-Sd52ywH",
        )
        .then(
            () => {
                alert("Message sent Successfully");
                form.current.reset();
            },
            () => {
                alert("Something Went Wrong");
            }
        );
    };

  return (
    <section id="contact" className="relative px-4 pt-28 md:px-6 md:pt-32 overflow-hidden">

      {/* Ambient Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-red-500/10
          blur-[180px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <p className="text-red-400 tracking-[0.3em] mb-4">
            CONTACT
          </p>

          <h2 className="
            text-4xl
            md:text-6xl
            font-black
            hero-title
            leading-tight
          ">
            Let’s Build Something.
          </h2>

          <p className="
            text-gray-400
            mt-6
            max-w-2xl
            leading-8
            text-lg
          ">
            Whether it’s a project, collaboration or opportunity,
            feel free to reach out.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="
          grid
          lg:grid-cols-2
          gap-10
        ">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className="
              glass
              rounded-[2rem]
              p-8
            "
          >

            <h3 className="
              text-3xl
              font-black
              mb-8
            ">
              Contact Information
            </h3>

            <div className="space-y-6">

              <ContactItem
                icon={<MdEmail />}
                title="Email"
                value="Hemachandran.k2001@gmail.com"
              />

              <ContactItem
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+91 9840910512"
              />

              <ContactItem
                icon={<FaGithub />}
                title="GitHub"
                value="github.com/Hemoo23"
              />

              <ContactItem
                icon={<FaLinkedin />}
                title="LinkedIn"
                value="linkedin.com/in/hemachandran-k"
              />

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}

            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className="
              glass
              rounded-[2rem]
              p-8
              space-y-6
            "
          >

            <Input
              label="Your Name"
              name="user_name"
              type="text"
            />

            <Input
              label="Phone"
              name="user_phone"
              type="text"
            />

            <Input
              label="Subject"
              name="Subject"
              type="text"
            />

            <Input
              label="Email"
              name="user_email"
              type="email"
            />

            {/* TEXTAREA */}

            <div>

              <label className="
                text-gray-300
                mb-3
                block
              ">
                Description
              </label>

              <textarea
                name="message"

                rows="6"

                required

                className="
                  w-full
                  glass
                  rounded-2xl
                  px-5
                  py-4
                  bg-transparent
                  outline-none
                  border
                  border-white/10
                  focus:border-red-500/40
                  transition
                  resize-none
                "
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="
                red-button
                w-full
                py-4
                rounded-2xl
                font-semibold
                text-lg
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

function Input({ label, type, name })
{
    return(
        <div>
            <label className="text-gray-300 mb-3 block">{label}</label>
            <input type={type} name={name} required className="w-full glass rounded-2xl px-5 py-4 bg-transparent outline-none border border-white/10 focus:border-red-500/40 transition"/>            
        </div>
    );
}

function ContactItem({ icon, title, value })
{
    return (
        <div className="flex items-center gap-5 glass rounded-2xl p-5 hover:border-red-500/30 transition">
            <div className="text-3xl text-red-400">{icon}</div>
            <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <p className="text-white break-all"> {value}</p>
            </div>
        </div>
    );
}