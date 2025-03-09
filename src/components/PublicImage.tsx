import React from 'react'
import Image from 'next/image'

interface ScreenshotProps {
  filename: string
  alt: string
  width: number
  height: number
  style?: React.CSSProperties
  className?: string
  layout?: string
}

const BASE_URL = 'https://assets.rebill.com/docs-assets'

const PublicImage: React.FC<ScreenshotProps> = ({
  filename,
  alt,
  width,
  height,
  style,
  className,
  layout,
}) => {
  const isLocalhost =
    typeof window !== 'undefined' && window.location.hostname === 'localhost'
  const src = true ? `/${filename}` : `${BASE_URL}/${filename}`
  const baseClasses = 'rounded-md shadow-sm'
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`${baseClasses} ${className}`}
      layout={layout}
    />
  )
}

export default PublicImage
