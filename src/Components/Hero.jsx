import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden h-screen">

      <div
        className="absolute inset-0 -z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/drone2.jpg')" }}
      />

      <div className="absolute inset-0 -z-10 bg-black/30" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl z-20 font-bold text-white"
      >
        Vyom<span className="text-accent">Garud</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 max-w-2xl z-20 text-lg text-gray-300"
      >
        Precision-Engineered UAV & Autonomous Aerial Systems for military-grade missions.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 z-20 inline-block bg-accent text-black font-semibold px-8 py-4 rounded-lg hover:bg-orange-500 transition"
      >
        Get in Touch
      </motion.a>
    </section>
  );
}


export default Hero;
