'use client'

import { motion } from 'framer-motion'
import AppShell from '@/components/layout/AppShell'

const services = [
  {
    title: 'Web applications',
    description: 'High-performance web apps built on modern stacks like Next.js, React, and TypeScript.',
    points: ['Design systems & UI libraries', 'Dashboard & internal tooling', 'Multi-tenant SaaS platforms'],
  },
  {
    title: 'Mobile & cross‑platform',
    description: 'Reach users everywhere with responsive web, PWA, and cross-platform experiences.',
    points: ['Responsive-first design', 'PWA & offline support', 'API-driven mobile architectures'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Resilient infrastructure designed for teams that ship continuously.',
    points: ['CI/CD pipelines', 'Observability & monitoring', 'Scalable cloud-native setups'],
  },
]

const processSteps = [
  { label: '01 · Discover', description: 'Clarify goals, risks, and constraints. Align on what success looks like.' },
  { label: '02 · Design', description: 'Shape flows, interfaces, and architecture into a coherent product story.' },
  { label: '03 · Build', description: 'Ship in small, reviewable slices with production-quality code from day one.' },
  {
    label: '04 · Evolve',
    description: 'Measure, iterate, and extend. We stay close to user feedback and telemetry.',
  },
]

export default function ServicesPage() {
  return (
    <AppShell>
      <section className="py-24 bg-gray-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
                ship digital products
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Swap or rename cards, change bullet lists, or plug in links to case studies—you can adapt this page
              without changing the underlying layout or motion.
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-200 via-blue-200 to-purple-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900"
              >
                <div className="h-full rounded-[22px] bg-white dark:bg-slate-950 px-6 py-8 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-semibold">
                    {index + 1}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-3xl border border-gray-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm px-6 sm:px-10 py-10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How we work together</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-xl">
                  This process is just a template. Rename steps, add your own, or embed diagrams—everything is wired so
                  you can tweak copy without touching layout.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="relative rounded-2xl border border-gray-200/80 dark:border-slate-800/80 bg-gray-50/60 dark:bg-slate-900/60 px-4 py-5"
                >
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-500 mb-2">
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </AppShell>
  )
}

