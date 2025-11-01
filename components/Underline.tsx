"use client";

import { motion } from "framer-motion";

export default function Underline() {
  return (
    <motion.div
      className="h-0.5 bg-foreground rounded-full"
      initial={{ width: 0 }}
      animate={{ width: "30rem" }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
