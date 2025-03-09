'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useInView } from 'framer-motion'

import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import { toast } from 'react-toastify'

function AnchorIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3" />
    </svg>
  )
}

function Eyebrow({ tag, label }: { tag?: string; label?: string }) {
  if (!tag && !label) {
    return null
  }

  return (
    <div className="flex items-center gap-x-3">
      {tag && <Tag>{tag}</Tag>}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </div>
  )
}

function Anchor({
  id,
  inView,
  children,
  copyWithoutHash = false,
}: {
  id: string
  inView: boolean
  children: React.ReactNode
  copyWithoutHash?: boolean
}) {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start', // Align to the start of the element
      });
    }

    navigator.clipboard.writeText(
      copyWithoutHash 
        ? window.location.href.split('#')[0] 
        : window.location.href.split('#')[0] + '#' + id
    );

    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 200);
    toast.success('Copied to clipboard');
  };

  return (
    <Link
      href={`${copyWithoutHash ? '' : '#' + id}`}
      className="group text-inherit no-underline hover:text-inherit"
      onClick={handleClick}
    >
      {inView && (
        <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
          <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
            <AnchorIcon 
              className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                isFlashing 
                  ? 'stroke-green-500 dark:stroke-green-400' 
                  : 'stroke-zinc-500 dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white'
              }`} 
            />
          </div>
        </div>
      )}
      {children}
    </Link>
  )
}

export function Heading<Level extends 1 | 2 | 3>({
  children,
  tag,
  label,
  level,
  anchor = true,
  ...props
}: React.ComponentPropsWithoutRef<`h${Level}`> & {
  id: string
  tag?: string
  label?: string
  level?: Level
  anchor?: boolean
}) {
  level = level ?? (2 as Level)
  let Component = `h${level}` as 'h2' | 'h3'
  let ref = useRef<HTMLHeadingElement>(null)
  let registerHeading = useSectionStore((s) => s.registerHeading)

  let inView = useInView(ref, {
    margin: `${remToPx(-3.5)}px 0px 0px 0px`,
    amount: 'all',
  })

  useEffect(() => {
    if (level) {
      registerHeading({ id: props.id, ref, offsetRem: tag || label ? 8 : 6 })
    }
  })

  return (
    <>
      <Eyebrow tag={tag} label={label} />
      <Component
        ref={ref}
        className={`${tag || label ? 'mt-2 scroll-mt-32' : 'scroll-mt-24'} ${level === 1 ? 'mb-5' : ''}`}
        {...props}
      >
        {(props.id || level === 1) && anchor ? (
          <Anchor id={props.id} inView={inView} copyWithoutHash={level === 1}>
            {children}
          </Anchor>
        ) : (
          children
        )}
      </Component>
    </>
  )
}
