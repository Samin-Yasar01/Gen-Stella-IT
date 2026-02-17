'use client'

import { motion } from 'framer-motion'
import AppShell from '@/components/layout/AppShell'

const highlights = [
  {
    title: 'Product-focused engineering',
    description: 'We blend strategy, design, and engineering to build software that actually moves business metrics.',
  },
  {
    title: 'AI-native delivery',
    description: 'From copilots to automation, we help teams infuse AI into existing workflows and products.',
  },
  {
    title: 'Long-term partnerships',
    description: 'Most of our clients work with us across multiple products and years of roadmap.',
  },
]

const milestones = [
  { year: '2019', label: 'Gen Stella founded as a remote-first studio.' },
  { year: '2021', label: 'Expanded into cloud, DevOps, and data platforms.' },
  { year: '2024', label: 'Launched AI transformation programs with key partners.' },
]

const teamMembers = [
  { name: 'Member 1', role: 'Frontend Engineer', image: '/logo/member-1.jpg', bio: 'Frontend engineer — builds responsive interfaces and delivers polished UX.' },
  { name: 'Member 2', role: 'Backend Engineer', image: '/logo/member-2.jpg', bio: 'Backend engineer — designs APIs, microservices, and scalable systems.' },
  { name: 'Member 3', role: 'Product Designer', image: '/logo/member-3.jpg', bio: 'Product designer — crafts user flows, visuals, and branded experiences.' },
  { name: 'Member 4', role: 'DevOps Engineer', image: '/logo/member-4.jpg', bio: 'DevOps engineer — automates deployment, monitoring, and cloud infrastructure.' },
]

export default function AboutPage() {
  return (
    <AppShell>
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr,2fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                About Gen Stella IT
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                A partner for{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
                  ambitious digital teams
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Gen Stella IT is a software services studio focused on building full‑stack web applications and websites.
                We design, build, and scale custom products — from marketing sites to complex internal platforms — using
                Next.js, NestJS, Express, React, and Node. We prioritize fast, reliable delivery and products that solve real
                user problems.
              </p>

              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                Our process starts with listening: we gather requirements and learn your goals and constraints. We convert
                that insight into an approved plan, then build iteratively with clear milestones. Pricing is typically
                fixed; if scope changes (more features or full code transfer) the price may be adjusted accordingly.
              </p>

              <p className="text-base text-gray-600 dark:text-gray-400">
                We are a friendly, tightly‑connected squad that values long‑term partnerships — we stay involved even
                after delivery to ensure your product runs smoothly and scales as your needs grow.
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-6">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-gray-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm p-4"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-transparent blur-xl rounded-3xl" />
              <div className="relative rounded-3xl bg-slate-950/90 dark:bg-slate-900/90 border border-white/10 overflow-hidden p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-300/90">Profile</p>
                    <p className="text-sm text-slate-200 mt-1">Gen Stella IT · Studio</p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 border border-slate-900" />
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-900" />
                    <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-900" />
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Core stack</span>
                    <span className="font-medium text-white">Next.js · NestJS · Express · React · Node</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialties</span>
                    <span className="font-medium text-white">Product engineering · AI · Cloud</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engagement</span>
                    <span className="font-medium text-white">Fixed-price (scope-dependent)</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                  <div className="rounded-xl bg-white/5 border border-white/10 py-3">
                    <p className="text-lg font-semibold text-white">20+</p>
                    <p>Products shipped</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 py-3">
                    <p className="text-lg font-semibold text-white">5+</p>
                    <p>Countries</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 py-3">
                    <p className="text-lg font-semibold text-white">98%</p>
                    <p>Client retention</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 border-t border-gray-200 dark:border-slate-800 pt-12"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">How we got here</h2>
            <div className="relative pl-4 md:pl-6">
              <div className="absolute left-1 md:left-2 top-1 bottom-1 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-transparent" />
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.35)]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">{m.year}</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AppShell>
  )
}


