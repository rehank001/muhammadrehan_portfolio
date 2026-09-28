'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export function InstagramIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function LinkedinIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function WhatsappIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

export function EmailIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export interface SocialLinkItem {
  name: string
  label: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  isExternal: boolean
  placeholderNote?: string
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'Instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/tabishkhan2k24/?hl=en',
    icon: InstagramIcon,
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-rehan-saleem-5773ab416/',
    icon: LinkedinIcon,
    isExternal: true,
  },
  {
    name: 'Facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/tabishkhan2k24',
    icon: FacebookIcon,
    isExternal: true,
  },
  {
    name: 'WhatsApp',
    label: 'WhatsApp',
    href: 'https://wa.me/923321513999',
    icon: WhatsappIcon,
    isExternal: true,
  },
  {
    name: 'Email',
    label: 'Email',
    href: 'mailto:rehankhan.corp@gmail.com',
    icon: EmailIcon,
    isExternal: false,
  },
]

interface SocialLinksProps {
  className?: string
  size?: 'default' | 'sm' | 'lg'
}

export function SocialLinks({ className, size = 'default' }: SocialLinksProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.name}
            href={item.href}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            aria-label={item.label}
            title={item.label}
            className={cn(
              'group relative inline-flex items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all duration-300',
              'hover:scale-110 hover:border-accent/60 hover:bg-accent/10 hover:text-accent hover:shadow-lg hover:shadow-accent/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              size === 'sm' && 'h-9 w-9',
              size === 'default' && 'h-11 w-11',
              size === 'lg' && 'h-12 w-12',
            )}
          >
            <Icon
              className={cn(
                'transition-transform duration-300 group-hover:scale-110',
                size === 'sm' && 'h-4 w-4',
                size === 'default' && 'h-5 w-5',
                size === 'lg' && 'h-5 w-5',
              )}
            />
            <span
              role="tooltip"
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {item.label}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </span>
          </a>
        )
      })}
    </div>
  )
}