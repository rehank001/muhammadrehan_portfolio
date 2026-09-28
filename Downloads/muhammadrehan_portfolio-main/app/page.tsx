import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { StatsStrip } from '@/components/stats-strip'
import { About } from '@/components/about'
import { Expertise } from '@/components/expertise'
import { Projects } from '@/components/projects'
import { Disciplines } from '@/components/disciplines'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Process } from '@/components/process'
import { Achievements } from '@/components/achievements'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Expertise />
        <Projects />
        <Disciplines />
        <Experience />
        <Skills />
        <Process />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
