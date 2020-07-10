import React from "react";
import { motion } from "framer-motion";
import { DateTime } from "../components/DateTime";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Home</h2>
      <DateTime />
    </motion.div>
  );
};
