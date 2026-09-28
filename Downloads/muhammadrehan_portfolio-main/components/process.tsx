import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the goals, users, and business context. Research and ask the right questions before touching pixels.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Turn insights into structure — flows, wireframes, and a clear direction that aligns design with objectives.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Craft polished, accessible interfaces and visual systems with attention to hierarchy, detail, and consistency.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Prototype, refine, and hand off — or build it. With MERN knowledge, I ensure design survives implementation.',
  },
]

export function Process() {
  return (
    <section className="relative border-y border-border bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Design Process"
          title="A clear, repeatable path from idea to impact."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="group relative h-full rounded-2xl border border-border bg-background/50 p-6 transition-colors hover:border-accent/40">
                <span className="font-display text-4xl font-bold text-border transition-colors group-hover:text-accent/40">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
