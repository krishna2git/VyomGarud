import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function About() {
  const title = "About VyomGarud";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.3 },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 max-w-6xl mx-auto">

      <motion.h2
        className="text-3xl font-bold mb-6"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {title.split("").map((char, index) =>
          char === " " ? ( " " ) : (
            <motion.span key={index} variants={child} className="inline-block">
              {char}
            </motion.span>
          )
        )}
      </motion.h2>

      <p className="text-gray-300 leading-relaxed max-w-3xl text-lg">
        VyomGarud develops advanced UAV platforms designed for high-reliability, 
        mission-critical, and autonomous operations. Our drones combine precision 
        engineering, aerospace-grade materials, and real-time onboard AI for unmatched 
        performance in defense, surveillance, and industrial missions.
      </p>
    </section>
  );
}


export default About;

