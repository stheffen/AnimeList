"use client";

import Image from "next/image";

export default function ImageSection({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="w-64 rounded object-cover"
      priority
    />
  );
}