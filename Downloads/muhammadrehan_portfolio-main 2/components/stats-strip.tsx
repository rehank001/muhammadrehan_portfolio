import { Reveal } from '@/components/reveal'

const STATS = [
  { value: '2+ Years', label: 'UI/UX & Graphic Design' },
  { value: '5+ Projects', label: 'iOS App Design' },
  { value: '1+ Year', label: 'Digital Marketing' },
  { value: 'MERN', label: 'Full-Stack Development' },
  { value: 'Senior Designer', label: 'Essenceware Technologies' },
]

export function StatsStrip() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 divide-border sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {STATS.map((stat, i) => (
            <li key={stat.label} className="px-2 py-8 lg:px-6">
              <Reveal delay={i * 70}>
                <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
