import LabProjectLayout, { LabSection, LabRelated } from "@/components/LabProjectLayout";

export const metadata = {
  title: "ADAClock — the_lab",
  description:
    "A Cardano-native BlockClock. An e-ink desk object cycling live network metrics.",
};

export default function ADAClockPage() {
  return (
    <LabProjectLayout
      projectId="0x02"
      status="CONCEPT"
      category="HARDWARE • CARDANO"
      title="ADAClock"
      hook={
        <>
          A Cardano-native BlockClock. A small e-ink desk object that cycles through live
          network metrics — price, block height, epoch, slot — pulled straight from the
          chain. No Cardano equivalent exists yet. This is the attempt.
        </>
      }
      links={[{ label: "[BACK_TO_LAB →]", href: "/lab" }]}
    >
      <LabSection title="the_idea">
        <p>
          In the Bitcoin world, Coinkite&apos;s BlockClock became a cult object — a
          WiFi-connected e-ink display cycling BTC price, block height, sats-per-dollar, and
          halving countdowns. It sat visibly behind Jack Dorsey during a 2021 US
          Congressional hearing. It turned network state into furniture.
        </p>
        <p>
          Cardano has no equivalent. That gap was pointed out directly by{" "}
          <strong>Lucas (Pedro H. Lucas, founder of 45B.io)</strong> — a Cardano community
          enablement hub — during a Discord conversation about the Cardano Doorbell. His
          suggestion: build the Cardano version.
        </p>
        <p>
          ADAClock is that project. A desk device cycling live Cardano metrics: ADA/USD
          price → block height → current epoch → slot number → tx count in the latest block
          → back to price, roughly 8 seconds per metric.
        </p>
        <p>
          The plan is deliberately open: publish the full build documentation alongside the
          firmware so anyone can build their own, and potentially productize a finished
          version later. Lucas already has a spare microcontroller from an old
          weather-station project he wants to repurpose to build his own once plans are
          released.
        </p>
      </LabSection>

      <LabSection title="how_it_works (planned)">
        <pre className="font-jetbrains-mono text-xs text-gray-500 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 overflow-x-auto leading-normal">
{`[Blockfrost API]
   |  price, block, epoch, slot, tx count
   v
[Raspberry Pi Pico W]
   |  cycles metrics on ~8s timer
   v
[Waveshare 2.13" e-Paper HAT — 250×122px, SPI]`}
        </pre>
        <p>
          Same controller and same API layer as the Cardano Doorbell — the two projects
          share a stack deliberately. The doorbell proved chain-to-hardware works; ADAClock
          extends it into a finished object.
        </p>
        <p>
          <strong>Why e-ink over LED/OLED:</strong> zero flicker, near-zero power draw
          between refreshes, and the &quot;cypherpunk desk object&quot; aesthetic that
          defines the BlockClock category. <strong>Why a Waveshare Pico HAT specifically:</strong>{" "}
          it plugs directly onto the Pico W with no loose wiring — essential for anything
          meant to be sold as a finished product.
        </p>
      </LabSection>

      <LabSection title="build_it_yourself (planned BOM)">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)] text-gray-600 text-xs">
                <th className="py-2 pr-4 font-normal">Component</th>
                <th className="py-2 pr-4 font-normal">Notes</th>
                <th className="py-2 font-normal">Est. cost</th>
              </tr>
            </thead>
            <tbody className="text-gray-400 text-xs">
              <tr className="border-b border-[rgba(255,255,255,0.06)]">
                <td className="py-2 pr-4">Raspberry Pi Pico W</td>
                <td className="py-2 pr-4">Same controller as the doorbell</td>
                <td className="py-2">~$6</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.06)]">
                <td className="py-2 pr-4">Waveshare 2.13&quot; Pico e-Paper module</td>
                <td className="py-2 pr-4">250×122px, plugs on as HAT, SPI</td>
                <td className="py-2">~$18</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.06)]">
                <td className="py-2 pr-4">Enclosure</td>
                <td className="py-2 pr-4">3D printed or laser-cut, TBD</td>
                <td className="py-2">~$3–5</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.06)]">
                <td className="py-2 pr-4">USB-C cable + stand</td>
                <td className="py-2 pr-4"></td>
                <td className="py-2">~$3</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-200 font-semibold">Total BOM</td>
                <td className="py-2 pr-4"></td>
                <td className="py-2 text-gray-200 font-semibold">~$30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Full build documentation (BOM, firmware setup, assembly) will be published with
          the firmware. Wiring documentation is minimal by design — the HAT eliminates it.
        </p>
      </LabSection>

      <LabSection title="what_i_learned">
        <p>
          Nothing yet — this page is being written <em>before</em> the build, deliberately.
          The doorbell taught the chain-to-hardware fundamentals; this section will fill in
          as the prototype comes together. Watch this space.
        </p>
      </LabSection>

      <LabSection title="what_comes_next">
        <ul className="space-y-1.5 text-gray-400">
          <li>[ ] Create dedicated <code>adaclock</code> repo (separate from <code>pijam-vol2</code>)</li>
          <li>[ ] Write firmware — multi-metric cycling display pulling from Blockfrost</li>
          <li>[ ] Design/source the enclosure</li>
          <li>[ ] Write the full public build doc</li>
          <li>[ ] Prototype in hand → follow up with Lucas (45B.io)</li>
          <li>[ ] Decide on pricing if productized — reference point: BlockClock Micro sits at $50–70 retail against this ~$30 BOM</li>
        </ul>
      </LabSection>

      <LabRelated
        href="/lab/cardano-doorbell"
        label="Cardano Doorbell — where this stack was first proven."
      />
    </LabProjectLayout>
  );
}
