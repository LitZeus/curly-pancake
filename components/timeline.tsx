"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    year: "2023",
    title: "Senior Frontend Developer",
    company: "Tech Innovation Co",
    description: "Led development of multiple high-impact web applications"
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    description: "Developed and maintained various client projects"
  },
  {
    year: "2019",
    title: "Junior Developer",
    company: "StartUp Hub",
    description: "Contributed to the development of innovative web solutions"
  }
]

export function Timeline() {
  return (
    <section className="py-12">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-8 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-0 top-0 h-full w-px bg-border">
                <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-primary font-medium">{experience.year}</div>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <div className="text-muted-foreground">{experience.company}</div>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

