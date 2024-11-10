"use client";

import { motion, AnimatePresence } from "framer-motion";

type DogImageModalProps = {
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
};

export const DogImageModal = ({ selectedImage, setSelectedImage }: DogImageModalProps) => {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-center w-[90vw] h-[90vh]"
          >
            <img
              src={selectedImage}
              alt="Full-size dog"
              className="rounded-3xl object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};