import type { Metadata } from "next";
import HardwareCatalogue from "@/components/HardwareCatalogue";
import { LicenceBadge, StatusPill } from "@/components/HardwareDesign";
import { PageShell } from "@/components/Page";
import {
  HARDWARE_INTRO,
  HARDWARE_TITLE,
  hardware,
  hardwareCategories,
  hardwareDesigns,
} from "@/content/hardware";
import { withAvailableImages } from "@/content/hardware-files";

export const metadata: Metadata = {
  title: `${HARDWARE_TITLE} · Lab`,
  description: `${HARDWARE_INTRO} ${hardware.status}.`,
};

export default function HardwareCataloguePage() {
  return (
    <PageShell
      crumbs={[{ label: "Home", href: "/" }, { label: "Lab", href: "/lab" }, { label: HARDWARE_TITLE }]}
      title={HARDWARE_TITLE}
      intro={HARDWARE_INTRO}
    >
      <div className="-mt-6 flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill>{hardware.status}</StatusPill>
            <LicenceBadge />
          </div>
          <a href={hardware.repo} target="_blank" rel="noopener noreferrer" className="btn">
            View all on GitHub <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <HardwareCatalogue designs={hardwareDesigns.map(withAvailableImages)} categories={hardwareCategories} />
      </div>
    </PageShell>
  );
}
