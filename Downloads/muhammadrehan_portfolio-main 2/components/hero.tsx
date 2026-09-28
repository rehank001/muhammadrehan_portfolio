'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        stage.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
          const depth = Number(el.dataset.depth ?? 0)
          el.style.transform = `translate3d(${px * depth * 34}px, ${py * depth * 34}px, 0)`
        })
      })
    }
    stage.addEventListener('mousemove', onMove)
    return () => {
      stage.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24 scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="hero-container relative mx-auto flex flex-col-reverse items-center justify-between gap-10 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Left / Text Content */}
        <div className="hero-text flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="sub-title inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
            <Sparkles className="size-3.5 text-accent" />
            Welcome to My Portfolio
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">Muhammad Rehan</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            AI Specialist &amp; Full-Stack Developer creating scalable digital solutions.
          </p>

          <div className="hero-cta mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                window.history.pushState(null, '', '#contact')
              }}
              className="btn btn-primary group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
            >
              Contact Me
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('work') || document.getElementById('projects')
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                window.history.pushState(null, '', '#work')
              }}
              className="btn btn-secondary inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-card hover:border-accent/40 cursor-pointer"
            >
              View Work
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            Available for freelance &amp; professional opportunities
          </div>
        </div>

        {/* Right / Profile Image Section */}
        <div
          ref={stageRef}
          className="hero-img-box relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[360px] lg:max-w-none"
        >
          {/* central Profile Image card */}
          <div
            data-depth="0.6"
            className="animate-float-slow absolute left-1/2 top-1/2 w-[80%] sm:w-[74%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] border-2 border-border/80 bg-card p-2 accent-glow shadow-2xl transition-all duration-400 hover:-translate-y-[5px]"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[18px]">
              <Image
                src="/images/my-profile.jpg"
                alt="Muhammad Rehan Saleem"
                fill
                priority
                sizes="(max-width: 768px) 280px, 420px"
                className="hero-profile-img object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* code snippet card */}
          <div
            data-depth="1.3"
            className="animate-float absolute -left-2 top-4 hidden sm:block w-[48%] rounded-2xl border border-border bg-background/95 p-3.5 shadow-2xl shadow-black/40 backdrop-blur transition-transform duration-300 z-10"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Code2 className="size-4 text-accent" /> stack.tsx
            </div>
            <pre className="mt-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
              <span className="text-accent">const</span> profile = {'{\n'}
              {'  '}ai: <span className="text-foreground">&apos;Specialist&apos;</span>,{'\n'}
              {'  '}stack: <span className="text-foreground">&apos;Full-Stack&apos;</span>{'\n}'}
            </pre>
          </div>

          {/* solutions badge card */}
          <div
            data-depth="1.1"
            className="animate-float-slow absolute -bottom-2 right-0 hidden sm:block w-[50%] rounded-2xl border border-border bg-card/95 p-3.5 shadow-2xl shadow-black/40 backdrop-blur transition-transform duration-300 z-10"
          >
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-4 text-accent" /> Scalable
              </span>
              <span className="text-accent font-semibold text-[11px]">Active</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-medium text-foreground">AI &amp; Web Systems</span>
            </div>
          </div>

          {/* status chip */}
          <div
            data-depth="1.7"
            className="animate-float absolute -right-2 top-2 flex items-center gap-2 rounded-2xl border border-border bg-background/90 px-3 py-1.5 shadow-xl shadow-black/40 backdrop-blur transition-transform duration-300 z-10"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-foreground">Open to Work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
