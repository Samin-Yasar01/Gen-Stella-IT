'use client'

import { motion } from 'framer-motion'
import AppShell from '@/components/layout/AppShell'

const projects = [
  {
    title: 'Nebula Analytics Dashboard',
    description: 'A modular analytics cockpit for SaaS teams with real-time insights and custom reporting.',
    image:
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    tags: ['Next.js', 'Tailwind', 'Postgres'],
  },
  {
    title: 'Orbit Launch Marketing Site',
    description: 'Conversion-optimized launch site for a developer tooling product, built for rapid iteration.',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    tags: ['React', 'Framer Motion', 'CMS'],
  },
  {
    title: 'StellaOps Platform',
    description: 'Internal tooling suite that streamlines deployments, observability, and feature rollouts.',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    tags: ['Node.js', 'Kubernetes', 'Design System'],
  },
]

export default function PortfolioPage() {
  return (
    <AppShell>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
          >
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-3">
                Portfolio
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Selected{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
                  client work
                </span>
              </h1>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xl">
                Replace the cards below with your real projects. Each card is intentionally simple: title, description,
                tags, and a hero image URL.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group rounded-3xl border border-gray-200 dark:border-slate-800 overflow-hidden bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 to-transparent opacity-80" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  )
}

