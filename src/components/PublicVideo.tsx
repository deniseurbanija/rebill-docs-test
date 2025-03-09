import React from 'react'
import Image from 'next/image'

interface ScreenshotProps {
  filename: string
  alt: string
  width: number
  height: number
  style?: React.CSSProperties
  className?: string
}

const BASE_URL = 'https://assets.rebill.com/docs-assets'

const PublicVideo: React.FC<ScreenshotProps> = ({
  filename,
  alt,
  width,
  height,
  style,
  className,
}) => {
  const isLocalhost =
    typeof window !== 'undefined' && window.location.hostname === 'localhost'
  const src = true ? `/${filename}` : `${BASE_URL}/${filename}`
  return (
    <video
      width={width}
      height={height}
      style={style}
      className={className}
      preload="none"
      autoPlay
      muted
      loop
    >
      <source src={src} type="video/mp4" />
      {alt}
    </video>
  )
}

export default PublicVideo
