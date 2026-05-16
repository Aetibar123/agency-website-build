"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "Next.js", color: "#000000", img:"/techstack/download.jpeg" },
  { name: "React", color: "#61DAFB", img:"/techstack/react.png" },
  { name: "Node.js", color: "#339933", img:"/techstack/node.png" },
  { name: "TypeScript", color: "#3178C6", img:"/techstack/ts.png" },
  { name: "PostgreSQL", color: "#4169E1", img:"/techstack/postgrace.png" },
  { name: "MongoDB", color: "#47A248", img:"/techstack/mongo.png" },
  { name: "AWS", color: "#FF9900", img:"/techstack/aws.png" },
  { name: "Docker", color: "#2496ED", img:"/techstack/docker.png" },
  { name: "Tailwind", color: "#06B6D4", img:"/techstack/telwind.png" },
  { name: "Framer", color: "#0055FF", img:"/techstack/farmer.png" },
  { name: "Python", color: "#3776AB", img:"/techstack/python.png" },
  { name: "GraphQL", color: "#E10098", img:"/techstack/gql.png" },
]

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-indigo/30 bg-indigo/10 px-4 py-1.5 text-sm font-medium text-indigo">
            Technology
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built with <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We leverage cutting-edge technologies to build fast, scalable, and
            maintainable solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.2, delay: i * 0.015, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ 
                scale: 1.1,
                zIndex: 10,
                transition: { type: "spring", stiffness: 600, damping: 15 }
              }}
              style={{ willChange: "transform, opacity" }}
              className="glass group relative flex flex-col items-center justify-center rounded-2xl p-6 transition-all duration-150 hover:border-cyan/50 hover:bg-cyan/5 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
            >
              {/* Icon Placeholder */}
              {/* <div
                className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${tech.color}20` }}
              > */}
              <img src={tech.img} alt={tech.name} className="mb-3 h-8 w-8 rounded-lg" />
                {/* <div
                  className="h-8 w-8 rounded-lg"
                  style={{ backgroundColor: tech.color }}
                /> */}
              {/* </div> */}
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
