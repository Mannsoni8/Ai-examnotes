import { motion } from "motion/react";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=" ">
      Footer
    </motion.div>
  );
};

export default Footer;
