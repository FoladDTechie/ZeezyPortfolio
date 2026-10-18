import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";
import { MethodNote, PlainList, StatusBlock, ThreeColumnList, type Row } from "@/components/WorkDetail";
import AirChainDiagram from "@/components/AirChainDiagram";

export const metadata = {
  title: "AirChain node",
  description:
    "A cellular air quality sensor node on an ESP32: sensors, power, LTE modem, firmware and a carrier board. Decisions, trade-offs and faults traced.",
};

/*
 * TODO(azeez): not rendered until measured or confirmed:
 *   - battery capacity (mAh / Wh of the 1S Li-ion pack)
 *   - solar panel rating (W, Voc) for the CN3791 MPPT stage
 *   - measured runtime on battery
 */

const decisions: Row[] = [
  [
    "EG800Z-CN modem over the SIM800L",
    "The breakout runs its UART at 3.3 V, so no level shifter. The SIM800L has 2.8 V logic and about 2 A bursts.",
    "LTE Cat 1 bis only, no 2G fallback. The -CN variant has no band 20, so I treat it as city-sited until I measure on location.",
  ],
  [
    "UART map on a 30-pin ESP32",
    "Three hardware UARTs for three serial devices. GNSS is receive-only, so it uses UART0 RX on GPIO3 and TX0 stays free for the console. PMS sensor on UART2 (GPIO16/17). Modem on UART1, remapped to GPIO25/26 because the default pins sit on the flash.",
    "GPIO3 is soldered, so the board cannot be unplugged for USB flashing. That drove the OTA update path.",
  ],
  [
    "Baud rates",
    "PMS sensor at 9600 8N1 with 32-byte frames. GNSS at 9600 with auto-detect, because modules ship at different rates. Modem AT commands and console at 115200.",
    "Auto-detect locked onto noise once. A lock now needs five valid sentences and a plausibility check.",
  ],
  [
    "Separate supply for the modem",
    "The modem needs about 2 A at 5 V in bursts and an MT3608 cannot supply that, so the MT3608 feeds only the ESP32 and sensors.",
    "Two supplies to manage. I powered the PMS sensor from a separate 5 V source to rule out boost sag as the cause of a sensor fault.",
  ],
  [
    "Sensor duty cycle",
    "The PMS SET pin lets the sensor sleep between readings. GPIO35 is input-only, so SET moved to GPIO4. 30 s warm-up, 5 s sample, about 265 s asleep.",
    "One reading per cycle and a warm-up before each.",
  ],
  [
    "Battery health in the payload",
    "battery_v is the source of truth. A 15-minute median ignores the voltage sag during LTE transmit. Hysteresis stops alerts flapping: low below 3.70 V, clearing at 3.80 V; critical below 3.50 V, clearing at 3.60 V.",
    "Starting values for an assumed 1S Li-ion pack, not calibrated yet.",
  ],
  [
    "Carrier PCB Rev A.1",
    "One board holds wiring, power and protection, with modules plugging in. Built after bench faults, including a header seated one hole off. Keyed connectors, a CN3791 solar MPPT stage, and a 5.2 V rail from a TPS61023 breakout whose 5.07 to 5.33 V range sits above the CO sensor's 5.0 V minimum and under the PMS7003's 5.5 V maximum.",
    "2-layer, 158 × 95 mm, 95 parts, 57 nets. Design-rule check: 0 errors, 0 unconnected. Not fabricated. Electrical rules check pending.",
  ],
];

const faults: Row[] = [
  [
    "PMS sensor and DHT22 both failing",
    "PMS TX wired to GPIO5, a strapping pin, not GPIO16.",
    "Rewired. The DHT22 recovered.",
  ],
  [
    "Noise flooding the PMS RX line",
    "First an unpowered sensor with the charger off, then crossed TX and RX.",
    "Restored power, then swapped the assignment in pins.h instead of resoldering.",
  ],
  [
    "Modem would not connect, signal quality 9 then 99",
    "LTE antenna in the GNSS port.",
    "Moved it to the LTE port. Signal quality 29 and the node connected.",
  ],
  [
    "GNSS fix looked live but was stale",
    "A loose RX wire gave noise that locked at 38400 and 115200.",
    "Stricter lock rule. The fix expires after 30 s.",
  ],
  [
    "Cellular node burned out",
    "Header seated one hole off.",
    "Keyed connectors and silkscreen outlines on the carrier board.",
  ],
  [
    "Node publishing null sensor values",
    "ESP32 not fully seated in its standoffs, and a loose PMS wire.",
    "Reseated both.",
  ],
];

export default function AirChainPage() {
  return (
    <LabProjectLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: "AirChain node" }]}
      width="wide"
      status="BENCH BUILD"
      category="EMBEDDED • POWER • CELLULAR"
      title="AirChain node"
      hook={
        <>
          I did the node work end to end: prototype assembly, battery sizing, sensor selection,
          cellular connectivity, baud-rate selection and firmware. The firmware started in
          MicroPython on a Pico W and moved to C++ on the ESP32.
        </>
      }
      links={[
        { label: "airchain.ng", href: "https://airchain.ng" },
        { label: "← All work", href: "/work" },
      ]}
    >
      <AirChainDiagram />

      {/* Moved here from the old home page "It reports." feature section. */}
      <LabSection id="it-reports" title="it_reports">
        <div className="grid items-start gap-8 font-sans text-base lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <p className="prose-body">
            The AirChain node reads particulate matter, temperature, humidity and position, then
            publishes one JSON message to an MQTT broker over LTE every 10 seconds. In one logged
            run it made <strong className="text-fg-strong">139 publishes</strong> in about{" "}
            <strong className="text-fg-strong">24 minutes</strong> and handled one retransmit.
          </p>
          <figure className="min-w-0">
            <figcaption className="meta mb-2">Message schema, no sample values</figcaption>
            <pre className="overflow-x-auto rounded-card border border-edge bg-surface p-5 font-jetbrains-mono text-xs leading-relaxed text-fg">
              <code>
                <span className="text-fg-subtle">topic   </span>air/&lt;sensor_id&gt;/data{"\n"}
                <span className="text-fg-subtle">every   </span>10 s{"\n"}
                <span className="text-fg-subtle">fields  </span>
                {"{\n"}
                {"  sensor_id,   timestamp,\n"}
                {"  temperature, humidity,\n"}
                {"  pm25,        pm10,\n"}
                {"  latitude,    longitude,\n"}
                {"  battery_v,   time_synced\n"}
                {"}"}
              </code>
            </pre>
          </figure>
        </div>
      </LabSection>

      <LabSection title="what_it_has_to_do">
        <PlainList
          items={[
            "Report PM2.5, PM10, temperature, humidity and position from outdoor sites over cellular.",
            "Run from a Li-ion battery with a solar charging stage.",
            "Take firmware updates after installation without unplugging the board.",
            "Publish to an MQTT broker over TLS with per-device credentials.",
          ]}
        />
      </LabSection>

      <LabSection title="decisions_and_trade_offs">
        <ThreeColumnList
          columns={["Decision", "Why (from the datasheet)", "What it costs"]}
          rows={decisions}
        />
      </LabSection>

      <LabSection title="faults_traced">
        <ThreeColumnList columns={["Symptom", "Cause", "Fix"]} rows={faults} />
      </LabSection>

      <LabSection title="status">
        <StatusBlock
          working={[
            "Node publishing over LTE with MQTT over TLS.",
            "PMS frames parsing cleanly, 17 of 17 in a short run.",
            "OTA update confirmed on a cellular node.",
          ]}
          open={[
            "Outdoor GNSS fix still to test.",
            "Firmware currently skips TLS certificate verification and must be fixed before deployment.",
            "One node sagged to 2.65 V, cause unknown.",
            "Carrier PCB not fabricated.",
          ]}
        />
      </LabSection>

      <MethodNote>
        2026.
      </MethodNote>
    </LabProjectLayout>
  );
}
