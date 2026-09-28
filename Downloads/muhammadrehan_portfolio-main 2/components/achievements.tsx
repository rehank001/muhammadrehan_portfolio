import { Reveal } from '@/components/reveal'

const STATS = [
  { value: '2+', label: 'Years of design experience', suffix: '' },
  { value: '5+', label: 'iOS app projects delivered', suffix: '' },
  { value: '1+', label: 'Year in digital marketing', suffix: '' },
  { value: '100%', label: 'Commitment to every project', suffix: '' },
]

export function Achievements() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
          <div className="relative">
            <Reveal>
              <p className="max-w-2xl font-display text-2xl font-bold leading-snug text-balance sm:text-3xl">
                Numbers are only part of the story — but they show a consistent
                commitment to craft and results.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80}>
                  <p className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
