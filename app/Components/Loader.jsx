import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);

    }, []);

    return (

        <AnimatePresence mode="wait">

            {loading ? (

                <motion.div

                    key="loader"

                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(10px)",
                    }}

                    transition={{
                        duration: 1,
                    }}

                    className="fixed inset-0 z-[999] bg-black flex items-center justify-center overflow-hidden"
                >

                    {/* Background Glow */}

                    <div className="absolute w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full"/>

                    {/* Terminal */}

                    <motion.div

                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}

                        transition={{
                            duration: 1,
                        }}

                        className="
              glass
              w-[90%]
              max-w-3xl
              rounded-3xl
              p-8
              border
              border-red-500/20
            "
                    >

                        {/* Terminal Top */}

                        <div className="
              flex
              items-center
              gap-3
              mb-8
            ">

                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />

                        </div>

                        {/* Terminal Text */}

                        <div className="
              font-mono
              text-green-400
              text-lg
              leading-10
            ">

                            <TypingLine
                                text="> Initializing Portfolio..."
                                delay={0}
                            />

                            <TypingLine
                                text="> Loading Components..."
                                delay={800}
                            />

                            <TypingLine
                                text="> Establishing Secure Connection..."
                                delay={1600}
                            />

                            <TypingLine
                                text="> Access Granted."
                                delay={2400}
                                red
                            />

                        </div>

                    </motion.div>

                </motion.div>

            ) : (

                <motion.div
                    key="content"

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 1,
                    }}
                >
                    {children}
                </motion.div>

            )}

        </AnimatePresence>
    );
}

/* ======================================== */

function TypingLine({ text, delay, red }) {

    const [visibleText, setVisibleText] = useState("");

    useEffect(() => {

        const timeout = setTimeout(() => {

            let i = 0;

            const interval = setInterval(() => {

                setVisibleText(text.slice(0, i));

                i++;

                if (i > text.length) {
                    clearInterval(interval);
                }

            }, 40);

        }, delay);

        return () => clearTimeout(timeout);

    }, [text, delay]);

    return (
        <p className={red ? "text-red-400" : ""}>
            {visibleText}
        </p>
    );
}