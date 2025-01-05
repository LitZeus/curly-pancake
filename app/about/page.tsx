"use client"

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          {...fadeInUp}
        >
          <Image
            src="/placeholder.svg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div>
            <motion.p className="text-lg mb-4" {...fadeInUp} transition={{ delay: 0.2 }}>
              Hi, I'm Tejas. I'm a creative developer with a passion for building beautiful, interactive web experiences. My journey in tech is complemented by my love for photography and pencil portrait sketches.
            </motion.p>
            <motion.p className="text-lg" {...fadeInUp} transition={{ delay: 0.4 }}>
              With a background in both design and development, I bring a unique perspective to every project, blending aesthetics with functionality to create memorable digital experiences.
            </motion.p>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <ul className="space-y-4">
                {[
                  { year: "2018", event: "Started learning web development" },
                  { year: "2019", event: "Launched my first freelance web project" },
                  { year: "2020", event: "Began exploring photography professionally" },
                  { year: "2021", event: "Started creating and selling pencil portraits" },
                  { year: "2022-Present", event: "Working as a full-stack developer while pursuing photography and art" },
                ].map((item, index) => (
                  <motion.li 
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <strong>{item.year}:</strong> {item.event}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <motion.p className="text-lg mb-4" {...fadeInUp} transition={{ delay: 1 }}>
            I believe in the power of creativity to solve problems and create meaningful experiences. Whether I'm coding a website, capturing a moment through my lens, or sketching a portrait, my goal is always to create something that resonates and leaves a lasting impression.
          </motion.p>
          <motion.p className="text-lg" {...fadeInUp} transition={{ delay: 1.2 }}>
            I'm constantly learning and evolving, always excited to take on new challenges and push the boundaries of what's possible in both the digital and artistic realms.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

