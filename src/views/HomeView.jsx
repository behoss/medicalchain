import React from "react";
import { motion } from "framer-motion";
import { DateTime } from "../components/DateTime";

export const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <motion.div
        initial={{ opacity: 0, y: "-5vw", scale: 0.9 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
      >
        <DateTime />
      </motion.div>
    </div>
  );
};
