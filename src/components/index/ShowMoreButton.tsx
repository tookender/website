"use client";

import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";

type ShowMoreButtonProps = {
  showAll: boolean;
  setShowAll: (show: boolean) => void;
};

export function ShowMoreButton({ showAll, setShowAll }: ShowMoreButtonProps) {
  return (
    <motion.button
      onClick={() => setShowAll(!showAll)}
      className="mt-4 ml-2 flex items-center gap-2 text-neutral-400/80 hover:text-neutral-200 
                transition-colors duration-200 group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <span>{showAll ? "Show less" : "Show more"}</span>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: showAll ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <SlArrowDown className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
} 