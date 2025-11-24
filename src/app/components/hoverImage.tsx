"use client";
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';
interface HoverImageProps {
  defaultSrc: string | StaticImageData;
  hoverSrc: string | StaticImageData;
  altText?: string;
  width?: number;
  height?: number;
}

const HoverImage = ({ defaultSrc, hoverSrc, altText, width, height }: HoverImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? hoverSrc : defaultSrc}
        alt={altText ?? ''}
        width={width}
        height={height}
        className="rounded-xl hover:shadow-md hover:ring-2 dark:hover:shadow-white zoom-hover"
      />
    </div>
  );
};

export default HoverImage;
