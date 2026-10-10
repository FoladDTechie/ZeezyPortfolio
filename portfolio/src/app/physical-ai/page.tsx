import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";

export const metadata = {
  title: "now exploring: physical ai — Azeez Bello",
  description:
    "Why an embedded systems engineer is exploring Physical AI: AI that senses and acts in the real world.",
};

export default function PhysicalAIPage() {
  return (
    <LabProjectLayout
      status="EXPLORING"
      category="physical_ai"
      title="now exploring: physical ai"
      hook={<>AI that senses and acts in the real world.</>}
      links={[
        { label: "[gndbase.xyz →]", href: "https://gndbase.xyz" },
        { label: "[BACK_TO_HOME →]", href: "/#physical-ai" },
      ]}
    >
      <LabSection title="what_it_is">
        <p>
          Physical AI is AI that doesn&apos;t stay on a screen. It senses the physical
          world through sensors and cameras, reasons about what it sees, and acts through
          motors, actuators and machines: robots, drones, vehicles, smart equipment.
        </p>
        <p>
          A chatbot answers a question. A physical AI system picks up the part, adjusts
          the valve, or reroutes the vehicle.
        </p>
      </LabSection>

      <LabSection title="why_im_exploring_it">
        <p>
          I&apos;ve spent my career on the layers physical AI sits on: sensors, firmware,
          power, connectivity, and the backend the hardware reports into.
        </p>
        <p>
          AirChain already does the &quot;sense&quot; half, instrumenting the physical
          world so invisible problems become visible. Physical AI adds the &quot;decide
          and act&quot; half. It&apos;s a natural next step, not a pivot.
        </p>
      </LabSection>

      <LabSection title="why_i_think_its_next">
        <p>This is my bet, not a forecast.</p>
        <ul className="space-y-3 text-fg-muted">
          <li>
            - AI models have become good enough at perception and reasoning to be useful
            outside a chat window.
          </li>
          <li>
            - Sensors, microcontrollers and edge compute keep getting cheaper and smaller.
          </li>
          <li>
            - A great deal of the economy is physical work (farming, logistics, energy,
            manufacturing, construction), and AI has barely touched most of it so far.
          </li>
          <li>
            - The hard part is no longer only the model. It&apos;s making models work
            reliably with real hardware, real power budgets and real-world mess. That is an
            engineering problem, and builders who understand the whole stack are well
            placed to solve it.
          </li>
        </ul>
      </LabSection>

      <LabSection title="where_im_doing_it">
        <p>
          As Cyberwave Uyo Chapter Lead, I run hands-on Physical AI workshops, meetups and
          hackathons through GroundBase, with in-person meetups in Uyo.
        </p>
        <p>
          If you want to build, learn or host something:{" "}
          <a
            href="https://gndbase.xyz"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-white transition-colors"
          >
            gndbase.xyz <span aria-hidden="true">→</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </LabSection>
    </LabProjectLayout>
  );
}
