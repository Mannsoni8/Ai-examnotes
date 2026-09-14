import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "motion/react";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <Navbar />

      {/* top */}
      <section className="max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            className="transfrom-gpu"
            style={{ transformStyle: "preserve-3d" }}>
            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent"
              whileHover={{ y: -4 }}
              style={{
                transform: "translateZ(40px)",
                textShadow: "0 18px 41px rgba(0,0,0,0.25)",
              }}>
              Create Smart <br /> AI Notes in Seconds
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* bottom */}

      <section></section>
    </div>
  );
};

export default Home;
