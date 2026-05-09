/**
 * Build an optimized public URL for an image stored in a Supabase Storage
 * public bucket. Uses Supabase Image Transformations:
 *   /storage/v1/render/image/public/<bucket>/<path>?width=&quality=&format=origin
 *
 * - `format=origin` lets Supabase auto-pick the best format the browser
 *   accepts (WebP / AVIF) via the request `Accept` header.
 * - `width` triggers server-side resize — pass the largest size you actually
 *   render at (CSS px × DPR). Smaller width = lighter payload on mobile.
 * - Output is cached aggressively at the CDN edge.
 *
 * For responsive `<img srcSet>`, use `storageImageSrcSet()`.
 */
import { supabase } from "@/integrations/supabase/client";

export type StorageImageOptions = {
  /** Target rendered width in pixels (CSS × DPR). Omit for original. */
  width?: number;
  /** Target rendered height in pixels. Omit to preserve aspect ratio. */
  height?: number;
  /** 20–100. Defaults to 75 — good balance for photographs. */
  quality?: number;
  /** "cover" (default) | "contain" | "fill" */
  resize?: "cover" | "contain" | "fill";
};

export function storageImage(
  bucket: string,
  path: string,
  opts: StorageImageOptions = {},
): string {
  const { width, height, quality = 75, resize } = opts;
  const transform: {
    width?: number;
    height?: number;
    quality?: number;
    resize?: "cover" | "contain" | "fill";
    format?: "origin";
  } = { quality, format: "origin" };
  if (width) transform.width = width;
  if (height) transform.height = height;
  if (resize) transform.resize = resize;

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path, { transform });
  return data.publicUrl;
}

/**
 * Build a `srcSet` string for responsive images. Pass an array of widths;
 * the function returns `"<url> 320w, <url> 640w, ..."` ready for `<img srcSet>`.
 */
export function storageImageSrcSet(
  bucket: string,
  path: string,
  widths: number[],
  opts: Omit<StorageImageOptions, "width"> = {},
): string {
  return widths
    .map((w) => `${storageImage(bucket, path, { ...opts, width: w })} ${w}w`)
    .join(", ");
}