"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Backend Development", level: 80 },
  { name: "Mobile Development", level: 75 },
  { name: "DevOps", level: 70 }
]

export function SkillsProgress() {
  return (
    <section className="py-12">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

