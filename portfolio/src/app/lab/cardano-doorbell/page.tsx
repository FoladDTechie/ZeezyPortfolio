import LabProjectLayout, { LabSection, LabRelated } from "@/components/LabProjectLayout";

export const metadata = {
  title: "Cardano Doorbell — the_lab",
  description:
    "A Raspberry Pi Pico W that watches a Cardano wallet and lights an LED when a tagged transaction arrives on-chain.",
};

export default function CardanoDoorbellPage() {
  return (
    <LabProjectLayout
      projectId="0x01"
      status="FUNCTIONAL"
      category="HARDWARE • CARDANO"
      title="Cardano Doorbell"
      hook={
        <>
          A Raspberry Pi Pico W that watches a Cardano wallet and lights an LED when a
          transaction tagged &quot;PIJAM&quot; arrives on-chain. No server. No middleman that can
          revoke access. Just hardware reading public chain state.
        </>
      }
      links={[
        { label: "[REPO →]", href: "https://github.com/FoladDTechie/pijam-vol2" },
        { label: "[PI_JAM_VOL2 →]", href: "https://lu.ma/evt-ftA9lvNrqQ6zwT7" },
        { label: "[BACK_TO_LAB →]", href: "/lab" },
      ]}
    >
      <LabSection title="the_idea">
        <p>
          Most blockchain demos happen on screens — a wallet balance updates, an explorer
          page refreshes. Nothing about that feels <em>real</em>. The Cardano Doorbell was
          built to make decentralization physical: someone sends a transaction from anywhere
          in the world, and a light turns on in a room in Uyo.
        </p>
        <p>
          The trigger isn&apos;t a webhook or a company&apos;s push notification service. The
          Pico W reads public chain state directly. If Blockfrost disappeared tomorrow, the
          same script could point at any other Cardano API — or eventually a local node —
          because the data itself lives on-chain, owned by no one.
        </p>
        <p>
          It was built as the centerpiece demo for <strong>Pi Jam Uyo Vol. 2 — Hardware
          Corner</strong> (July 31, 2026): a live demonstration where attendees send a tagged
          transaction and watch the LED respond seconds later.
        </p>
      </LabSection>

      <LabSection title="how_it_works">
        <pre className="font-jetbrains-mono text-xs text-fg-muted bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 overflow-x-auto leading-normal">
{`[Eternl wallet, anywhere]
        |
        |  tx with metadata "PIJAM"
        v
[Cardano preprod chain]
        |
        |  polled every 10s via Blockfrost
        |  /addresses/{address}/transactions
        v
[Raspberry Pi Pico W]
        |
        |  metadata parsed, tag matched
        v
[Onboard LED — 3 seconds]`}
        </pre>
        <p>
          The script polls one specific known address — it is address-scoped, not scanning
          the whole chain. When a new transaction appears, it fetches the transaction&apos;s
          metadata and checks for the &quot;PIJAM&quot; tag.
        </p>
        <p>Metadata detection is wallet-agnostic. It handles three formats:</p>
        <ul className="list-disc list-inside space-y-1 text-fg-muted">
          <li>Plain string (Eternl&apos;s free &quot;Add on-chain Message&quot; feature)</li>
          <li>List of strings</li>
          <li>Proper CIP-20 <code>{`{"msg": [...]}`}</code> dict format</li>
          <li>Plus a raw-string fallback across the entire metadata response</li>
        </ul>
        <p>
          A <code>METADATA_FILTER</code> toggle switches behavior: <code>True</code> = only
          trigger on &quot;PIJAM&quot;-tagged transactions, <code>False</code> = trigger on
          any new transaction (plain tip-jar mode).
        </p>
        <p>There are two versions of the firmware:</p>
        <ul className="list-disc list-inside space-y-1 text-fg-muted">
          <li><code>cardano_doorbell.py</code> — the core: poll, match, blink</li>
          <li>
            <code>cardano_doorbell_with_status.py</code> — additionally serves a local status
            webpage on the same WiFi network, auto-refreshing every 5 seconds, showing:
            status, watched address, last poll time, last tx hash, tag match result, LED
            state, poll/trigger counts, and uptime
          </li>
        </ul>
      </LabSection>

      <LabSection title="build_it_yourself">
        <p className="text-fg-strong font-semibold">Hardware</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)] text-fg-subtle text-xs">
                <th className="py-2 pr-4 font-normal">Component</th>
                <th className="py-2 font-normal">Notes</th>
              </tr>
            </thead>
            <tbody className="text-fg-muted text-xs">
              <tr className="border-b border-[rgba(255,255,255,0.06)]">
                <td className="py-2 pr-4">Raspberry Pi Pico W</td>
                <td className="py-2">Onboard LED is the output — nothing else needed</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">USB cable</td>
                <td className="py-2">Power + flashing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          That&apos;s the whole BOM. The point is minimalism — chain state to physical output
          with the least hardware possible.
        </p>

        <p className="text-fg-strong font-semibold pt-2">Setup</p>
        <ol className="list-decimal list-inside space-y-1 text-fg-muted">
          <li>
            Create a free <strong>Blockfrost</strong> account and a <strong>PREPROD</strong>{" "}
            project — the <code>project_id</code> is passed as a request header
          </li>
          <li>
            Install <strong>Eternl</strong> wallet, switch it to the Preprod network, fund it
            via the official Cardano testnet faucet
          </li>
          <li>Flash MicroPython onto the Pico W</li>
          <li>
            Copy <code>cardano_doorbell.py</code> across, set your WiFi credentials,
            Blockfrost project ID, and the watched address
          </li>
          <li>
            Run it. Send a transaction to the watched address with &quot;PIJAM&quot; in the
            metadata (Eternl: &quot;Add on-chain Message&quot;). Watch the LED.
          </li>
        </ol>

        <p className="text-fg-strong font-semibold pt-2">Config values</p>
        <ul className="list-disc list-inside space-y-1 text-fg-muted">
          <li><code>METADATA_FILTER</code> — tag-gated vs any-transaction mode</li>
          <li>Poll interval — default 10 seconds</li>
          <li>LED duration — default 3 seconds</li>
        </ul>
      </LabSection>

      <LabSection title="what_i_learned">
        <ul className="list-disc list-inside space-y-2 text-fg-muted">
          <li>
            On-chain metadata is messier than the CIP suggests — every wallet writes it
            slightly differently, which is why the parser handles three formats plus a
            fallback. Robustness against wallet variance mattered more than elegance.
          </li>
          <li>
            MicroPython&apos;s TCP stack gets fragile when the Pico W is simultaneously
            polling Blockfrost and serving HTTP. The <code>_with_status</code> version needs
            bench-testing under concurrent load before live event use — flagged as the main
            open risk.
          </li>
          <li>
            The demo lands harder than dashboards ever do. &quot;The blockchain turned on a
            light&quot; is instantly legible to a non-technical audience in a way that
            explorer screenshots are not.
          </li>
        </ul>
      </LabSection>

      <LabSection title="what_comes_next">
        <ul className="space-y-1.5 text-fg-muted">
          <li>[ ] Bench-test <code>cardano_doorbell_with_status.py</code> under concurrent load (WiFi polling + HTTP serving + Blockfrost calls)</li>
          <li>[ ] <code>blink.py</code> starter script for the event&apos;s hands-on session</li>
          <li>[ ] README.md and SETUP.md for the repo</li>
          <li>[ ] Live deployment: Pi Jam Uyo Vol. 2 — July 31, 2026</li>
          <li>[ ] Long-term: point at a local Cardano node instead of Blockfrost for full decentralization</li>
        </ul>
      </LabSection>

      <LabRelated
        href="/lab/adaclock"
        label="ADAClock — the doorbell's stack, grown into a desk object."
      />
    </LabProjectLayout>
  );
}
