import Image from "next/image";

/**
 * Native pixel dimensions of the tightly-cropped logo PNGs.
 * Width is derived from `height` to preserve aspect ratio.
 */
const NATIVE_WIDTH = 1004;
const NATIVE_HEIGHT = 720;
const ASPECT_RATIO = NATIVE_WIDTH / NATIVE_HEIGHT;

type LogoProps = {
  /** Rendered height in CSS pixels. Width is auto-calculated. */
  height?: number;
  /**
   * - `"default"` — forest-green strokes on transparent background,
   *   works on white and on the semi-translucent scrolled navbar
   * - `"white"` — white strokes on transparent background, for dark backgrounds
   */
  variant?: "default" | "white";
  /** Pass `priority` for above-the-fold logos (e.g. navbar). */
  priority?: boolean;
  className?: string;
  alt?: string;
};

const SRC_BY_VARIANT = {
  default: "/L-transparent.png",
  white: "/L-white.png",
} as const;

export function Logo({
  height = 40,
  variant = "default",
  priority,
  className,
  alt = "Verdex",
}: LogoProps) {
  const width = Math.round(height * ASPECT_RATIO);
  return (
    <Image
      src={SRC_BY_VARIANT[variant]}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={className}
    />
  );
}

export default Logo;
