import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="relative z-20 mx-6 mt-6
       rounded-2xl
       bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl 
       border border-white/10
       shadow-[0_22px_55px_rgba(0,0,0,0.75)]
       flex items-center justify-between px-8 py-4">
      <div className="flex iteam-center gap-3">
        <img src="" alt="" />
      </div>
    </motion.div>
  );
};

export default Navbar;
