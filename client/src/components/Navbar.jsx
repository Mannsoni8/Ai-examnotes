import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const credits = userData.credits;
  const [showCredits, setShowCredits] = useState(false);

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
        <img src={logo} alt="examnotes" className="w-8 h-9" />

        <span className="text-lg hidden md:black font-semibold">
          ExamNotes <span className="text-gray-400">AI</span>
        </span>
      </div>

      <div className="flex items-center gap-6 relative">
        <div className="relative">
          <motion.div
            onClick={() => setShowCredits(!showCredits)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1 px-2 py-2 rounded-full
          bg-white/10 
            border border-white/20 
          text-white text-sm 
            shadow-md cursor-pointer">
            <span className="text-xl">💎</span>
            <span>{credits}</span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-xs font-bold">
              ➕
            </motion.span>
          </motion.div>
          {showCredits && (
            <AnimatePresence>
              {" "}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 10, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-4 w-64 rounded-2xl
              bg-black/50 backdrop-blur-xl
              border border-white/10
              shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-4 text-white"></motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
