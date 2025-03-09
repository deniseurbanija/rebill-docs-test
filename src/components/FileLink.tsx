import React from 'react';

interface LinkProps {
  filename: string;
  displayText: string;
  style?: React.CSSProperties;
  className?: string;
}

const BASE_URL = "https://assets.rebill.com/docs-assets";

const FileLink: React.FC<LinkProps> = ({
  filename,
  displayText,
  style,
  className,
}) => {
  const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
  const href = !isLocalhost ? `${filename}` : `${BASE_URL}/${filename}`;

  return <a href={href} style={style} className={className}>{displayText}</a>;
};

export default FileLink;
