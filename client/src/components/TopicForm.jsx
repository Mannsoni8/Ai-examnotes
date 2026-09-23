import { motion } from "motion/react";
import { useState } from "react";
import Toggle from "./Toggle";

const TopicForm = () => {
  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [examType, setExamType] = useState("");
  const [revisionMode, setRevisionMode] = useState(false);
  const [includeDiagram, setIncludeDiagram] = useState(false);
  const [includeChart, setIncludeChart] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        w-full
        rounded-2xl
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_25px_60px_rgba(0,0,0,0.75)]
        p-6 sm:p-8
        space-y-6
        text-white
      ">
      {/* Topic */}
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic (e.g. Web-Development)"
        className="
          w-full
          h-12
          px-4
          rounded-xl
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          placeholder-gray-400
          text-white
          focus:outline-none
          focus:ring-2
          focus:ring-white/30
        "
      />

      {/* Class Level */}
      <input
        type="text"
        value={classLevel}
        onChange={(e) => setClassLevel(e.target.value)}
        placeholder="Enter class level (e.g. Class 10)"
        className="
          w-full
          h-12
          px-4
          rounded-xl
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          placeholder-gray-400
          text-white
          focus:outline-none
          focus:ring-2
          focus:ring-white/30
        "
      />

      {/* Exam Type */}
      <input
        type="text"
        value={examType}
        onChange={(e) => setExamType(e.target.value)}
        placeholder="Enter exam type (e.g. CBSE, JEE, NEET)"
        className="
          w-full
          h-12
          px-4
          rounded-xl
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          placeholder-gray-400
          text-white
          focus:outline-none
          focus:ring-2
          focus:ring-white/30
        "
      />

      {/* Toggles */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <Toggle
          label="Exam Revision Mode"
          checked={revisionMode}
          onChange={() => setRevisionMode((prev) => !prev)}
        />

        <Toggle
          label="Include Diagram"
          checked={includeDiagram}
          onChange={() => setIncludeDiagram((prev) => !prev)}
        />

        <Toggle
          label="Include Chart"
          checked={includeChart}
          onChange={() => setIncludeChart((prev) => !prev)}
        />
      </div>
    </motion.div>
  );
};

export default TopicForm;
