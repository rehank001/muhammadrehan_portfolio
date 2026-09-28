import { Reveal } from '@/components/reveal'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SocialLinks, WhatsappIcon } from '@/components/social-links'

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
                  <span className="h-px w-6 bg-accent" />
                  Contact
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  Let&apos;s build something worth remembering.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  I&apos;m available for freelance and professional
                  opportunities across UI/UX design, graphic design, digital
                  marketing, and MERN development. Tell me about your project and
                  let&apos;s make it real.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:maliktabish54352@gmail.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
                  >
                    <Mail className="size-4" />
                    Send me an email
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://wa.me/923321513999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent/60 hover:bg-card hover:scale-[1.03]"
                  >
                    <WhatsappIcon className="size-4 text-accent" />
                    Chat on WhatsApp
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Connect &amp; Follow
                  </p>
                  <SocialLinks />
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <form
                action="mailto:maliktabish54352@gmail.com"
                method="POST"
                encType="text/plain"
                className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur"
                aria-label="Contact form"
              >
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
                  >
                    Send message
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
