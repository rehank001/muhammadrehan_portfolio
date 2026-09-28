'use client'

import React from 'react'
import { SocialLinks } from '@/components/social-links'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.slice(1)
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', href)
      }
    }
  }

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-display text-2xl font-bold tracking-tight cursor-pointer"
            >
              MRS<span className="text-accent">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Muhammad Rehan Saleem — UI/UX Designer, Graphic Designer, Digital
              Marketer &amp; MERN Developer.
            </p>
            <div className="mt-4">
              <SocialLinks size="sm" />
            </div>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Muhammad Rehan Saleem. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            Available for freelance &amp; professional opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}
