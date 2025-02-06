'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'GraphQL',
  'PostgreSQL',
  'AWS',
];

export default function SkillsSection() {
  return (
    <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
      <Card className="overflow-hidden border-none bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" {...fadeInUp} transition={{ delay: 1 }}>
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border hover:border-primary transition-colors duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
