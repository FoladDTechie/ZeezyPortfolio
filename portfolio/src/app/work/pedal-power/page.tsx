import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";
import { PlainList, ThreeColumnList } from "@/components/WorkDetail";

export const metadata = {
  title: "Pedal Power",
  description:
    "The electronics of a human-powered charging system: ESP32 control, INA226 power monitoring and CC/CV charging for a 4S2P Li-ion pack.",
};

/*
 * TODO(azeez): sections held back until the numbers exist. Do not render placeholders.
 *   - what_it_has_to_do: the requirements the system was built against.
 *   - decisions_and_trade_offs: motor requirements and the numbers behind the sizing
 *     (torque, speed, power); the motor chosen and why.
 *   - status / bench results: peak and sustained watts, charge current, runtime.
 */

export default function PedalPowerPage() {
  return (
    <LabProjectLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: "Pedal Power" }]}
      width="wide"
      status="BUILT"
      category="POWER • EMBEDDED"
      title="Pedal Power"
      hook={
        <>
          Pedal Power is a human-powered charging system built at BuildATech. My part was the
          electronics, from sizing the motor through bench testing.
        </>
      }
      links={[{ label: "← All work", href: "/work" }]}
    >
      <LabSection title="what_i_built">
        <PlainList
          items={[
            "An ESP32 controller with three SPI displays across three interconnected modules.",
            "Two INA226 monitors on I2C reporting voltage, current and power.",
            "CC/CV charge control for a 4S2P Li-ion pack: four cells in series for pack voltage, two strings in parallel for capacity.",
            "Hand-built wiring harnesses and stripboard layout.",
          ]}
        />
      </LabSection>

      <LabSection title="faults_traced">
        <ThreeColumnList
          columns={["Symptom", "Cause", "Fix"]}
          rows={[
            [
              "Boost-converter modules ran above their safe temperature under load",
              "The physical layout and the components selected for the boost stage.",
              "Changed the layout and the component selection until the modules stayed within limits.",
            ],
          ]}
        />
      </LabSection>
    </LabProjectLayout>
  );
}
