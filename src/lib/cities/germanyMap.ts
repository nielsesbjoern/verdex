/**
 * Germany outline and city-marker projection used across reach + city pages.
 * Equirectangular: lon 5.87–15.04°E → x 0–100, lat 47.27–55.06°N → y 0–136.
 */
export const GERMANY_PATH =
  "M30.4 2.6 L39.0 4.0 L44.7 5.2 L45.4 8.7 L54.9 11.8 L60.3 18.4 L67.9 15.3 L72.8 10.2 L82.7 7.1 L87.0 16.6 L91.1 19.6 L90.2 30.5 L93.0 31.0 L90.3 38.3 L95.2 47.8 L96.8 51.8 L95.2 61.7 L99.5 65.7 L97.5 72.6 L88.7 73.8 L77.8 79.0 L70.1 84.2 L66.8 86.8 L71.2 92.0 L72.9 98.1 L77.8 99.8 L82.1 106.7 L85.7 113.5 L82.7 122.3 L77.5 124.9 L77.8 128.9 L69.6 127.9 L62.5 129.5 L57.0 132.7 L49.9 134.2 L46.9 134.8 L45.0 131.4 L40.1 130.1 L34.1 128.2 L29.8 129.3 L18.8 130.0 L18.6 120.3 L22.7 109.9 L25.7 105.5 L17.2 104.1 L10.7 101.2 L5.3 97.0 L5.8 91.1 L2.8 85.4 L4.4 76.9 L0.5 73.0 L3.8 64.1 L0.9 57.5 L9.3 54.7 L13.1 48.9 L13.0 46.0 L14.6 31.5 L24.3 26.7 L29.2 26.2 L30.9 20.6 L32.5 13.2 L29.8 8.0 Z";

export type MapMarker = {
  slug: string;
  name: string;
  x: number;
  y: number;
  anchor?: "start" | "end";
  live?: boolean;
};

/** Convert WGS84 to the SVG viewBox used by our stylised Germany map. */
export function lonLatToMapCoords(
  lon: number,
  lat: number,
): { x: number; y: number } {
  const x = ((lon - 5.87) / (15.04 - 5.87)) * 100;
  const y = ((55.06 - lat) / (55.06 - 47.27)) * 136;
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}
