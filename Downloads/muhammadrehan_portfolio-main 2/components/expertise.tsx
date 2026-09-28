import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Layers, PenTool, Megaphone, Code2 } from 'lucide-react'

const SERVICES = [
  {
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'End-to-end product design — research, wireframes, user flows, and polished, accessible interfaces for web and iOS.',
    points: ['Wireframing & prototyping', 'Design systems', 'iOS app design'],
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description:
      'Brand identities and visual assets with a strong sense of typography, hierarchy, and detail across every touchpoint.',
    points: ['Brand identity', 'Marketing creatives', 'Print & digital'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Performance-focused campaigns that turn design into measurable business results, including Google Ads management.',
    points: ['Google Ads', 'Campaign strategy', 'Conversion design'],
  },
  {
    icon: Code2,
    title: 'MERN Development',
    description:
      'Hands-on full-stack development bridging design and engineering to ship real, functional digital products.',
    points: ['React front-ends', 'Node & Express APIs', 'MongoDB data'],
  },
]

export function Expertise() {
  return (
    <section id="services" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Expertise & Services"
          title="One professional, four connected disciplines."
          description="A rare combination of design craft, marketing insight, and technical understanding — so every project is considered end to end."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/15" />
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="size-1 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
