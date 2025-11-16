import { motion } from "framer-motion";

const items = [
  {
    title: "Tactical UAV Platforms",
    desc: "Rugged, long-endurance drones engineered for reconnaissance, mapping, and autonomous missions.",
  },
  {
    title: "Autonomy & AI Systems",
    desc: "Real-time onboard AI, adaptive mission intelligence, and secure autonomous flight stacks.",
  },
  {
    title: "Payload Integrations",
    desc: "EO/IR sensors, LiDAR, thermal optics, communications relays, and custom payloads.",
  },
  {
    title: "Mission Software",
    desc: "Secure dashboards, fleet control, telemetry analysis, and mission planning tools.",
  },
];

function Capabilities() {
  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto">

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 opacity-40 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.1),transparent)] -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-16 text-pink-400 drop-shadow-lg"
      >
        Capabilities
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 100 }}      
            whileInView={{ opacity: 1, x: 0 }}     
            exit={{ opacity: 0, x: -100 }}         
            whileHover={{ scale: 1.2, rotateX: 2, rotateY: -2 }}
            transition={{
              duration: 0.1,
              delay: i * 0.1,                     
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.2 }} 
            className="
              relative p-6 rounded-xl border border-purple-500/20
              bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20
              backdrop-blur-md
              transition-all duration-300 group
              hover:border-pink-400 hover:shadow-[0_0_25px_-4px_var(--tw-shadow-color)]
              hover:shadow-pink-500/50
            "
            style={{ "--tw-shadow-color": "var(--tw-color-pink-400)" }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-pink-400/50 rounded-tl-sm" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-pink-400/50 rounded-br-sm" />

            <div className="
              absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40
              bg-gradient-to-r from-pink-400/50 to-purple-400/10 blur-xl
              transition-all duration-500
            " />

            <h3 className="text-lg font-semibold text-pink-400 mb-3 relative z-10 drop-shadow-md">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm relative z-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;
