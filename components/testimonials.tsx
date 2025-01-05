"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "An exceptional developer who brings creativity and technical excellence to every project.",
    author: "Jane Smith",
    role: "Product Manager, Tech Co"
  },
  {
    quote: "Delivered outstanding results that exceeded our expectations.",
    author: "John Doe",
    role: "CEO, Design Studio"
  },
  {
    quote: "A true professional with an eye for detail and innovation.",
    author: "Sarah Johnson",
    role: "Creative Director, Agency X"
  }
]

export function Testimonials() {
  return (
    <section className="py-12">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-lg mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

