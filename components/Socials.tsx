'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Socials = () => {
  return (
    <>
      {[ 
        { icon: Github, href: 'https://github.com/LitZeus', label: 'GitHub' },
        { icon: Twitter, href: 'https://x.com/artist_tejas', label: 'Twitter' },
        { icon: Instagram, href: 'https://www.instagram.com/artist.tejas_', label: 'Instagram' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/tejasathalye', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:me.tejasathalye@gmail.com', label: 'Email' },
      ].map(({ icon: Icon, href, label }, index) => (
        <motion.div
          key={href}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial='initial'
          animate='animate'
          variants={fadeInUp}
          transition={{ delay: 0.01 + index * 0.1 }}
        >
          <Link href={href} className='p-2 rounded-full transition-all duration-300' aria-label={label}>
            <Icon className='w-5 h-5' />
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Socials;
