import { motion } from "motion/react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=" z-10 mx-4 mb-6 mt-24 rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 via-black/80 to-black/90 px-6 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:mx-6 sm:px-8 ">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <motion.div
          whileHover={{ rotateX: 6, rotateY: -6 }}
          className="flex flex-col gap-4 transform-gpu"
          style={{ transformStyle: "preserve-3d" }}>
          <div
            className=" flex cursor-pointer items-center gap-3 transition-transform duration-300 "
            style={{ transform: "translateZ(20px)" }}>
            <img
              src={logo}
              alt="ExamNotes AI logo"
              className=" h-9 w-9 shrink-0 object-contain "
            />
            <span
              className=" text-lg font-semibold bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent whitespace-nowrap "
              style={{ textShadow: "0 6px 18px rgba(0,0,0,0.4)" }}>
              ExamNotes <span className="text-gray-400">AI</span>
            </span>
          </div>
          <p className=" max-w-sm text-sm leading-6 text-gray-300 ">
            ExamNotes AI helps students generate exam-focused notes, revision
            material, diagrams, and printable PDFs using AI.
          </p>
        </motion.div>

        <div className="text-center">
          <h1 className="text-sm font-semibold text-white mb-4">Quick Links</h1>
          <ul className="space-y-2 text-sm">
            <li
              onClick={() => {
                navigate("notes");
              }}
              className="text-gray-300 hover:text-white transition-colors">
              Notes
            </li>
            <li
              onClick={() => {
                navigate("history");
              }}
              className="text-gray-300 hover:text-white transition-colors">
              History
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default Footer;
