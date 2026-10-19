import { existsSync } from "node:fs";
import path from "node:path";
import type { HardwareDesign } from "@/content/hardware";

/**
 * Server only (reads the disk). Every hardware page is static, so this runs
 * at build time: an image path whose file is not in public/ yet is treated
 * like null and renders the placeholder, never a broken image.
 */
const inPublic = (src: string | null) =>
  src && existsSync(path.join(process.cwd(), "public", src)) ? src : null;

export function withAvailableImages(design: HardwareDesign): HardwareDesign {
  const { schematic, plot, photo } = design.images;
  return {
    ...design,
    images: { schematic: inPublic(schematic), plot: inPublic(plot), photo: inPublic(photo) },
  };
}
