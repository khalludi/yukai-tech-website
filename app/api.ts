"use client";

import { ImageLoaderProps } from "next/image";

export function customLoader({ src, width }: ImageLoaderProps) {
  return src + `?w=${width}`;
}
