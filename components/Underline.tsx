"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Underline() {
  return (
    <div className="md:scale-x-50">
      <motion.div
        className="h-0.5 bg-foreground rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "70vw" }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
