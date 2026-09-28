import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const TIMELINE = [
  {
    role: 'Senior Graphic Designer & Digital Marketer',
    company: 'Essenceware Technologies',
    period: 'Recent',
    description:
      'Led creative design across brand and product, managed Google Ads campaigns, and collaborated on digital marketing initiatives — bridging visual design with measurable performance.',
    highlights: [
      'Senior-level design ownership',
      'Google Ads campaign management',
      'Cross-functional creative & marketing work',
    ],
  },
  {
    role: 'UI/UX & Graphic Designer',
    company: 'Freelance & Product Projects',
    period: '2+ Years',
    description:
      'Designed user-centered interfaces and visual identities, including 5+ iOS app design projects, delivering polished experiences from concept to handoff.',
    highlights: [
      '5+ iOS app design projects',
      'Design systems & prototyping',
      'Brand identity design',
    ],
  },
  {
    role: 'MERN Full-Stack Development',
    company: 'Hands-on Practice',
    period: 'Ongoing',
    description:
      'Built full-stack applications with MongoDB, Express, React, and Node — connecting design thinking with real implementation.',
    highlights: [
      'React front-end development',
      'Node & Express APIs',
      'Design-to-code understanding',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A track record across design, marketing, and code."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-28">
              <p className="text-sm text-muted-foreground">
                Most recently
              </p>
              <p className="mt-2 font-display text-xl font-bold leading-snug">
                Senior Graphic Designer &amp; Digital Marketer
              </p>
              <p className="mt-1 text-sm text-accent">
                Essenceware Technologies
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <p className="font-display text-2xl font-bold">2+</p>
                  <p className="text-xs text-muted-foreground">
                    Years in design
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold">1+</p>
                  <p className="text-xs text-muted-foreground">
                    Year marketing
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <ol className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:h-full before:w-px before:bg-border">
            {TIMELINE.map((item, i) => (
              <Reveal as="li" key={item.role} delay={i * 90} className="relative pl-8">
                <span className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-accent bg-background" />
                <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">
                      {item.role}
                    </h3>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-secondary/60 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
