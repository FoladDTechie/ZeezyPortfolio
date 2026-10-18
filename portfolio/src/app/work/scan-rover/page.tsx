import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";
import { PlainList, StatusBlock } from "@/components/WorkDetail";

export const metadata = {
  title: "Scan Rover — Azeez Bello",
  description:
    "Scan Rover: a robot that walks a property so buyers can tour it remotely. In progress · Physical AI · Python · MuJoCo · Raspberry Pi 5 · Cyberwave.",
};

/*
 * Wording rules for this page (do not relax until there is evidence):
 *   - In progress / planned / building only. Nothing here is validated in simulation
 *     or proven on hardware yet.
 *   - Output is 360-degree or video-style tours from a 640x480 RGB camera. Never
 *     describe it as 3D or as matching LiDAR.
 *   - No customers exist yet.
 * TODO(azeez): revise the wording after scan_test.py runs and the rover traces a route.
 * TODO(azeez): add a demo video or screen recording of the twin driving the route.
 */

export default function ScanRoverPage() {
  return (
    <LabProjectLayout
      width="wide"
      status="IN PROGRESS"
      category="PHYSICAL AI • SIMULATION"
      title="Scan Rover"
      hook={<>A robot that walks a property so buyers can tour it remotely.</>}
      links={[
        { label: "[PHYSICAL_AI →]", href: "/physical-ai" },
        { label: "[BACK_TO_WORK →]", href: "/#work" },
      ]}
    >
      <p className="font-jetbrains-mono text-xs tracking-wide text-fg-subtle">
        In progress · Oct 2026 to present · Python · MuJoCo · Raspberry Pi 5 · Cyberwave
      </p>

      <LabSection title="the_idea">
        <p>
          Most virtual tours need expensive scanning gear and a trained operator. This project
          explores a cheaper approach: a small ground rover that drives a pre-planned route
          through a property, pausing to capture each room. The route is designed and tested
          first in a digital twin, a simulated copy of the robot, then run on the real hardware.
        </p>
        <p>
          Currently building and validating the simulation. Hardware build and first test scans
          are next.
        </p>
      </LabSection>

      <LabSection title="building_now">
        <PlainList
          items={[
            "I built the rover's digital twin on the Cyberwave platform from the Waveshare UGV Beast asset.",
            "I am configuring the physics simulation in MuJoCo: wheel mass and actuator definitions, and occupancy-map generation.",
            "I am debugging the integration between the SDK and the simulation backend.",
          ]}
        />
      </LabSection>

      <LabSection title="planned">
        <PlainList
          items={[
            "Hardware: a Raspberry Pi 5 with the robot's onboard camera (640×480, wide-angle) and pan-tilt mount.",
            "Route planning room by room.",
            "Output: 360-degree or video-style tours from the 640×480 RGB camera.",
            "Exploring per-property pricing and pilot customers, as a lower-cost alternative to LiDAR-based scanning.",
          ]}
        />
      </LabSection>

      <LabSection title="status">
        <StatusBlock
          working={["Digital twin built on Cyberwave from the Waveshare UGV Beast asset."]}
          open={[
            "MuJoCo physics configuration, in progress.",
            "SDK and simulation-backend integration, being debugged.",
            "Hardware build, planned.",
            "First test scans, next.",
          ]}
        />
      </LabSection>
    </LabProjectLayout>
  );
}
