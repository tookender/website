import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "bottom";
}

export const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: position === "top" ? 10 : -10 }}
            animate={{ opacity: 1, y: position === "top" ? 0 : 0 }}
            exit={{ opacity: 0, y: position === "top" ? 10 : -10 }}
            className="absolute z-50 px-2 py-1 text-sm bg-neutral-900 rounded-md whitespace-nowrap"
            style={{
              [position === "top" ? "bottom" : "top"]: "100%",
              marginBottom: position === "top" ? "10px" : undefined,
              marginTop: position === "bottom" ? "10px" : undefined,
            }}
          >
            {content}
            {/* Arrow */}
            <div 
              className="absolute translate-x-1 w-2 h-2 bg-neutral-900 rotate-45"
              style={{
                [position === "top" ? "bottom" : "top"]: "-4px",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 