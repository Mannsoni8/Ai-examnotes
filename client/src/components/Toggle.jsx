import { motion } from "motion/react";

const Toggle = ({ label, checked, onChange }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        cursor-pointer
        select-none
        w-fit
      "
      onClick={onChange}>
      <motion.div
        animate={{
          backgroundColor: checked
            ? "rgba(34,197,94,0.35)"
            : "rgba(255,255,255,0.15)",
        }}
        transition={{ duration: 0.25 }}
        className={`
          relative
          flex
          items-center
          ${checked ? "justify-end" : "justify-start"}
          shrink-0
          w-12
          h-6
          px-1
          rounded-full
          border
          border-white/20
          backdrop-blur-lg
        `}>
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="
            w-5
            h-5
            rounded-full
            bg-white
            shadow-[0_5px_15px_rgba(0,0,0,0.5)]
          "
        />
      </motion.div>

      <span
        className={`
          text-sm
          whitespace-nowrap
          transition-colors
          ${checked ? "text-green-300" : "text-gray-300"}
        `}>
        {label}
      </span>
    </div>
  );
};

export default Toggle;
