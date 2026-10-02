import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Toggle from "./Toggle";
import { generateNotes } from "../services/api";
import { useDispatch } from "react-redux";
import { updateCreadits } from "../redux/userSlice";

const TopicForm = ({ setResult, setLoading, loading, setError }) => {
  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [examType, setExamType] = useState("");

  const [revisionMode, setRevisionMode] = useState(false);
  const [includeDiagram, setIncludeDiagram] = useState(false);
  const [includeChart, setIncludeChart] = useState(false);

  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!topic.trim()) {
      setError("Please enter the topic");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const result = await generateNotes({
        topic,
        classLevel,
        examType,
        revisionMode,
        includeChart,
        includeDiagram,
      });

      setResult(result);
      setClassLevel("");
      setTopic("");
      setExamType("");
      setIncludeChart(false);
      setRevisionMode(false);
      setIncludeDiagram(false);

      if (typeof result.creditsLeft === "number") {
        dispatch(updateCreadits(result.creditsLeft));
      }
    } catch (error) {
      console.error(
        "Generate Notes Error:",
        error.response?.data || error.message,
      );

      setError(
        error.response?.data?.message || "Failed to fetch notes from server",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      setProgress(0);
      setProgressText("");
      return;
    }

    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 95) {
        value = 95;
        setProgressText("Almost done...");
        clearInterval(interval);
      } else if (value > 70) {
        setProgressText("Finalizing notes...");
      } else if (value > 40) {
        setProgressText("Processing content...");
      } else {
        setProgressText("Generating notes...");
      }

      setProgress(Math.floor(value));
    }, 700);

    return () => clearInterval(interval);
  }, [loading]);

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

      {/* Generate Button */}
      <motion.button
        onClick={handleSubmit}
        whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
        whileTap={!loading ? { scale: 0.95 } : {}}
        disabled={loading}
        className={`w-full mt-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 transition ${
          loading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-gradient-to-br from-white to-gray-200 text-black shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
        }`}>
        {loading ? "Generating Notes.." : "Generate Notes"}
      </motion.button>

      {/* Progress */}
      {loading && (
        <div className="mt-4 space-y-2">
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              className="
                h-full
                bg-gradient-to-r
                from-green-400
                via-emerald-400
                to-green-500
              "
            />
          </div>

          <div className="flex justify-between text-xs text-gray-300">
            <span>{progressText}</span>
            <span>{progress}%</span>
          </div>

          <p className="text-xs text-gray-400 text-center">
            This may take up to 2-5 minutes. Please don't close or refresh the
            page.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default TopicForm;
