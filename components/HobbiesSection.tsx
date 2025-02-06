'use client';

import { motion } from 'framer-motion';
import { Camera, Pencil } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const hoverEffect = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export default function HobbiesSection() {
  return (
    <motion.div className="space-y-4" {...fadeInUp}>
      <h2 className="text-2xl font-bold text-center">My Hobbies</h2>
      <div className="flex justify-center gap-8">
        <motion.div {...hoverEffect}>
          <Link
            href="https://example.com/photography"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:text-primary transition-colors duration-200"
          >
            <Camera className="w-12 h-12 mx-auto mb-2" />
            <h3 className="font-semibold">Photography</h3>
          </Link>
        </motion.div>
        <motion.div {...hoverEffect}>
          <Link
            href="https://example.com/portraits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:text-primary transition-colors duration-200"
          >
            <Pencil className="w-12 h-12 mx-auto mb-2" />
            <h3 className="font-semibold">Pencil Portraits</h3>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
