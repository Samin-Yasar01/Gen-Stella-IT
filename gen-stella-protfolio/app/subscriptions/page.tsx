'use client'

import { motion } from 'framer-motion'
import AppShell from '@/components/layout/AppShell'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    cadence: 'per project',
    highlight: 'For landing pages & small sites.',
    features: ['Single-page or simple site', 'Basic animations & theming', '1 week of post-launch support'],
  },
  {
    name: 'Growth',
    price: '$2.4k',
    cadence: 'per month',
    highlight: 'For product teams shipping every week.',
    featured: true,
    features: ['Ongoing feature work', 'Priority bug fixes', 'Design & implementation reviews'],
  },
  {
    name: 'Dedicated',
    price: 'Let’s talk',
    cadence: '',
    highlight: 'For companies who want a long-term product partner.',
    features: ['Embedded squad', 'Custom SLAs & coverage', 'Architecture & roadmap guidance'],
  },
]

export default function SubscriptionsPage() {
  return (
    <AppShell>
      <section className="py-24 bg-gray-50 dark:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
              Subscriptions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Pick a plan that{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
                matches your roadmap
              </span>
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              These tiers are just placeholders—rename them, change prices, or adjust bullet points without changing any
              layout or animation logic.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: plan.featured ? 1.02 : 1.01 }}
                className={`relative rounded-3xl border bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm px-6 py-8 flex flex-col ${
                  plan.featured
                    ? 'border-blue-500 shadow-[0_18px_60px_rgba(37,99,235,0.35)]'
                    : 'border-gray-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-2.5 py-0.5 text-[11px] font-medium text-white shadow-lg">
                    Most popular
                  </span>
                )}
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{plan.name}</h2>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{plan.highlight}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.cadence && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{plan.cadence}</span>
                  )}
                </div>
                <ul className="mt-5 space-y-2 text-xs text-gray-700 dark:text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full rounded-xl text-sm font-semibold py-2.5 transition-colors ${
                    plan.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-slate-800 dark:hover:bg-slate-700'
                  }`}
                >
                  Talk about this plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  )
}

