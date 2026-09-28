import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const GROUPS = [
  {
    title: 'Design',
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Development',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML & CSS'],
  },
  {
    title: 'Marketing',
    items: ['Google Ads', 'Campaign Strategy', 'Analytics', 'Conversion Design', 'A/B Testing'],
  },
  {
    title: 'Foundations',
    items: ['Typography', 'Color Theory', 'Layout', 'User Research', 'Accessibility'],
  },
]

export function Skills() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="The toolkit behind the work."
          description="A blend of creative software, development stacks, and marketing platforms that lets me take an idea from concept to launch."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-sm font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
