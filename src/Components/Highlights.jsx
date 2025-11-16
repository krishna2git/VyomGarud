import { motion } from "framer-motion";

const highlights = [
  "MIL-STD ruggedness & field-tested reliability",
  "Advanced onboard autonomy with real-time AI",
  "Secure encrypted communication and telemetry",
];

function Highlights() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">

      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/drone1.jpg')" }}
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.5 }}
      />

      <div className="absolute inset-0 bg-black/30 -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center relative z-10 py-20 px-6">
        {highlights.map((highlight, i) => (
          <motion.div
            key={i}
            className="px-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: i * 0.3, 
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h4 className="text-accent text-3xl font-bold mb-3 drop-shadow-[0_0_10px_rgba(255,0,255,0.7)]">
              ◆
            </h4>

            <p className="text-gray-300 text-lg flex justify-center flex-wrap">
              {highlight.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: idx * 0.05 + i * 0.2,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


export default Highlights;
