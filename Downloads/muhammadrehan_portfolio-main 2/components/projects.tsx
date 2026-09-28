'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Vitals — iOS Fitness App',
    category: 'UI/UX · iOS Design',
    description:
      'A health tracking app with an intuitive activity dashboard, goal rings, and a calm, focused experience.',
    image: '/images/project-fitness.png',
    tags: ['iOS', 'UX Research', 'Prototyping'],
    featured: true,
  },
  {
    title: 'Northwind Analytics',
    category: 'UI/UX · SaaS Dashboard',
    description:
      'A data-rich SaaS dashboard turning complex metrics into clear, actionable views.',
    image: '/images/project-dashboard.png',
    tags: ['Dashboard', 'Design System'],
  },
  {
    title: 'Essence Brand System',
    category: 'Graphic Design · Branding',
    description:
      'A complete visual identity spanning logo, stationery, and marketing collateral.',
    image: '/images/project-branding.png',
    tags: ['Identity', 'Typography'],
  },
  {
    title: 'Growth Ads Campaign',
    category: 'Digital Marketing',
    description:
      'A Google Ads campaign with creative and landing pages driving a measurable lift in ROAS.',
    image: '/images/project-marketing.png',
    tags: ['Google Ads', 'Conversion'],
  },
  {
    title: 'Marketplace App',
    category: 'UI/UX · iOS Design',
    description:
      'An e-commerce experience with a frictionless browsing and checkout flow.',
    image: '/images/project-ecommerce.png',
    tags: ['iOS', 'E-commerce'],
  },
  {
    title: 'Fullstack Web Platform',
    category: 'MERN Development',
    description:
      'A production web app built with the MERN stack, from interface to API.',
    image: '/images/project-webapp.png',
    tags: ['React', 'Node', 'MongoDB'],
  },
]

export function Projects() {
  return (
    <section id="work" className="relative py-24 lg:py-32 scroll-mt-20">
      <div id="projects" className="absolute -top-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Work that blends design, technology, and business."
          />
          <Reveal delay={120}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                window.history.pushState(null, '', '#contact')
              }}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent cursor-pointer"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 90}
              className={project.featured ? 'sm:col-span-2 lg:row-span-2' : ''}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/40">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {project.title}
                    </h3>
                    <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
