import { Reveal } from '@/components/reveal'
import { Check } from 'lucide-react'

const PILLARS = [
  'User-centered UI/UX design',
  'Brand & visual identity systems',
  'Data-driven digital marketing',
  'MERN full-stack fundamentals',
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-accent/5 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card p-8">
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl font-bold tracking-tighter">
                  MRS<span className="text-accent">.</span>
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  est. 2022
                </span>
              </div>
              <p className="mt-8 text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Disciplines
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'UI/UX Design',
                  'Graphic Design',
                  'Digital Marketing',
                  'MERN Development',
                  'iOS App Design',
                  'Google Ads',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <p className="font-display text-3xl font-bold">2+</p>
                  <p className="text-xs text-muted-foreground">
                    Years designing
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold">5+</p>
                  <p className="text-xs text-muted-foreground">
                    iOS app projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
              <span className="h-px w-6 bg-accent" />
              About Me
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
              A designer who understands more than design.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Muhammad Rehan Saleem, a multidisciplinary digital
                professional with a strong foundation in UI/UX and Graphic
                Design and practical experience across Digital Marketing and
                MERN Full-Stack Development.
              </p>
              <p>
                Over the past 2+ years, I&apos;ve worked on visual identities,
                digital interfaces, and product experiences, including more than
                5 iOS app projects. My experience as a Senior Graphic Designer at{' '}
                <span className="text-foreground">
                  Essenceware Technologies
                </span>{' '}
                allowed me to work across creative design and digital marketing,
                including Google Ads management.
              </p>
              <p>
                Alongside design, I&apos;ve developed hands-on knowledge of MERN
                Full-Stack Development, giving me a better understanding of how
                design decisions translate into real, functional products.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {PILLARS.map((pillar) => (
                <li key={pillar} className="flex items-center gap-3 text-sm">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" />
                  </span>
                  {pillar}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
