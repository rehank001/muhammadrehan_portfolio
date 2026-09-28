import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import {
  Layers,
  PenTool,
  Megaphone,
  Code2,
  Smartphone,
  Frame,
  Palette,
  Type,
  Target,
  TrendingUp,
  Database,
  Server,
} from 'lucide-react'

function UiuxVisual() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2 space-y-3 rounded-2xl border border-border bg-background/60 p-4">
        <div className="h-2 w-1/3 rounded-full bg-accent/70" />
        <div className="h-2 w-full rounded-full bg-secondary" />
        <div className="h-2 w-4/5 rounded-full bg-secondary" />
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="aspect-video rounded-lg bg-secondary" />
          <div className="aspect-video rounded-lg bg-accent/20" />
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-2xl border border-border bg-background/60 p-4">
        <Smartphone className="size-5 text-accent" />
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded-full bg-secondary" />
          <div className="h-1.5 w-2/3 rounded-full bg-secondary" />
          <div className="h-6 w-full rounded-lg bg-accent/70" />
        </div>
      </div>
    </div>
  )
}

function GraphicVisual() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="grid grid-cols-2 gap-3">
        <span className="size-14 rounded-2xl bg-accent" />
        <span className="size-14 rounded-full border-4 border-foreground" />
        <span className="size-14 rounded-2xl bg-foreground" />
        <span className="size-14 rounded-2xl bg-muted-foreground/40" />
      </div>
      <div className="font-display text-6xl font-bold leading-none tracking-tighter">
        Aa
        <span className="block text-2xl font-normal text-muted-foreground">
          Type scale
        </span>
      </div>
    </div>
  )
}

function MarketingVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between rounded-2xl border border-border bg-background/60 p-4">
        {[45, 60, 40, 75, 55, 90, 70, 100].map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={cn(
                'w-2.5 rounded-full',
                i === 7 ? 'bg-accent' : 'bg-secondary',
              )}
              style={{ height: `${h * 0.6 + 20}px` }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { k: 'CTR', v: '6.4%' },
          { k: 'ROAS', v: '4.2x' },
          { k: 'CPL', v: '-31%' },
        ].map((m) => (
          <div
            key={m.k}
            className="rounded-xl border border-border bg-background/60 p-3 text-center"
          >
            <p className="font-display text-lg font-bold text-accent">{m.v}</p>
            <p className="text-[11px] text-muted-foreground">{m.k}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MernVisual() {
  return (
    <div className="rounded-2xl border border-border bg-background/80 p-4 font-mono text-xs">
      <div className="flex items-center gap-1.5 pb-3">
        <span className="size-2 rounded-full bg-destructive/70" />
        <span className="size-2 rounded-full bg-accent/70" />
        <span className="size-2 rounded-full bg-muted-foreground/40" />
      </div>
      <pre className="leading-relaxed text-muted-foreground">
        <span className="text-accent">app</span>.get(
        <span className="text-foreground">&apos;/api/users&apos;</span>,{' '}
        {'async (req, res) => {'}
        {'\n  '}
        <span className="text-accent">const</span> data ={' '}
        <span className="text-accent">await</span> User.find()
        {'\n  '}res.json(data)
        {'\n})'}
      </pre>
      <div className="mt-3 flex flex-wrap gap-2">
        {['MongoDB', 'Express', 'React', 'Node'].map((t) => (
          <span
            key={t}
            className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

const DISCIPLINES = [
  {
    id: 'ui-ux',
    icon: Layers,
    eyebrow: 'UI / UX Design',
    title: 'Intuitive products, designed around real users.',
    description:
      'From research and wireframes to high-fidelity, accessible interfaces — I design digital products that feel effortless. My focus is clarity, hierarchy, and interactions that guide users naturally toward their goals.',
    capabilities: [
      { icon: Frame, label: 'Wireframes & prototypes' },
      { icon: Smartphone, label: 'iOS app design' },
      { icon: Layers, label: 'Design systems' },
      { icon: Target, label: 'Usability & flows' },
    ],
    Visual: UiuxVisual,
  },
  {
    id: 'graphic',
    icon: PenTool,
    eyebrow: 'Graphic Design',
    title: 'Brand identities with craft and consistency.',
    description:
      'Two-plus years shaping visual identities and marketing creatives. I build cohesive systems — logos, typography, color, and layout — that make brands recognizable and memorable across every medium.',
    capabilities: [
      { icon: Palette, label: 'Brand identity' },
      { icon: Type, label: 'Typography systems' },
      { icon: PenTool, label: 'Marketing creatives' },
      { icon: Layers, label: 'Print & digital assets' },
    ],
    Visual: GraphicVisual,
    reverse: true,
  },
  {
    id: 'marketing',
    icon: Megaphone,
    eyebrow: 'Digital Marketing',
    title: 'Design that drives measurable business results.',
    description:
      'A year-plus of hands-on digital marketing, including Google Ads management. I connect creative with performance — building campaigns and landing experiences that convert and scale profitably.',
    capabilities: [
      { icon: Target, label: 'Google Ads management' },
      { icon: TrendingUp, label: 'Campaign strategy' },
      { icon: Megaphone, label: 'Ad creatives' },
      { icon: Target, label: 'Conversion optimization' },
    ],
    Visual: MarketingVisual,
  },
  {
    id: 'mern',
    icon: Code2,
    eyebrow: 'MERN Development',
    title: 'Bridging design and engineering.',
    description:
      "Hands-on experience with the MERN stack gives me a builder's perspective. I understand how design decisions become real, functional products — and I speak the same language as the engineers who ship them.",
    capabilities: [
      { icon: Code2, label: 'React front-ends' },
      { icon: Server, label: 'Node & Express APIs' },
      { icon: Database, label: 'MongoDB data models' },
      { icon: Layers, label: 'Component architecture' },
    ],
    Visual: MernVisual,
    reverse: true,
  },
]

export function Disciplines() {
  return (
    <section className="relative border-y border-border bg-card/20 py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6 lg:gap-32">
        {DISCIPLINES.map((d) => (
          <div
            key={d.id}
            id={d.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={cn(d.reverse && 'lg:order-2')}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
                <d.icon className="size-4" />
                {d.eyebrow}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl lg:text-4xl">
                {d.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {d.description}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {d.capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3"
                  >
                    <cap.icon className="size-4 shrink-0 text-accent" />
                    <span className="text-sm">{cap.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className={cn(d.reverse && 'lg:order-1')}>
              <div className="relative rounded-3xl border border-border bg-card p-6 accent-glow">
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/5 blur-3xl" />
                <d.Visual />
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
