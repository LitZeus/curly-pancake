'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function CTASection() {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`relative space-y-8 py-12 px-4 sm:px-6 lg:px-8 rounded-lg ${
        theme === 'light'
          ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20'
          : 'bg-gradient-to-b from-background/50 to-background/30'
      } border backdrop-blur-sm`}
      {...fadeInUp}
      transition={{ delay: 1.4 }}
    >
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <motion.h2 className="text-3xl font-bold">Let's Create Something Amazing</motion.h2>
        <motion.p className="text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px]">
          <Link href="/contact" className="gap-2">
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px]">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="gap-2">
            <FileText className="w-4 h-4" />
            View Resume
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
