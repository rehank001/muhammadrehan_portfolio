'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v[...]
      <path
        fill="currentColor"
        stroke="none"
        d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.271-.468-2.42-1.493-.895-.798-1.5-1.785-1.676-2.086-[...]
      />
    </svg>
  )
}

export function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
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
              size === 'sm' && 'size-9',
              size === 'default' && 'size-11',
              size === 'lg' && 'size-12',
            )}
          >
            <Icon
              className={cn(
                'transition-transform duration-300 group-hover:scale-110',
                size === 'sm' && 'size-4',
                size === 'default' && 'size-5',
                size === 'lg' && 'size-5',
              )}
            />
            {/* Elegant accessible tooltip */}
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
