import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      "Rehan combines a designer's eye with a real understanding of how products get built. Rare to find someone fluent in design, marketing, and development at once.",
    name: 'Team Lead',
    role: 'Essenceware Technologies',
  },
  {
    quote:
      'The iOS designs were clean, thoughtful, and genuinely easy to use. Every detail felt intentional and the handoff was seamless.',
    name: 'Product Owner',
    role: 'iOS App Project',
  },
  {
    quote:
      'Our Google Ads creative and landing pages finally worked together. The results spoke for themselves — a clear lift in performance.',
    name: 'Marketing Client',
    role: 'Growth Campaign',
  },
]

export function Testimonials() {
  return (
    <section className="relative border-y border-border bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about working with me."
          align="center"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background/50 p-7 transition-colors hover:border-accent/40">
                <Quote className="size-7 text-accent/50" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
