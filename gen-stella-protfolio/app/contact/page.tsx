'use client'

import { motion } from 'framer-motion'
import AppShell from '@/components/layout/AppShell'

export default function ContactPage() {
  return (
    <AppShell>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[3fr,2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tell us about your{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
                next project
              </span>
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              This form is intentionally minimal. Wire it up to your API, form tool, or email provider—no layout changes
              needed. All inputs use your existing theme tokens.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  What are you looking to build?
                </label>
                <input
                  type="text"
                  placeholder="Marketing site, internal dashboard, AI assistant, etc."
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project details
                </label>
                <textarea
                  rows={4}
                  placeholder="Timeline, budget range, tech stack preferences—whatever helps us understand the work."
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 max-w-sm">
                  By default this button does nothing in code—hook it up to your own API route or third-party form tool.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Send message
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-gray-50/80 dark:bg-slate-950/80 backdrop-blur-sm p-6 space-y-6"
          >
            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Direct contact</h2>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Swap these for your real contact details—email, Calendly link, or chat widget.
              </p>
            </div>
            <div className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Email</p>
                <p>hello@genstellait.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Preferred timezone</p>
                <p>UTC · async-first collaboration</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Typical response time</p>
                <p>Within 1–2 business days</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </AppShell>
  )
}

