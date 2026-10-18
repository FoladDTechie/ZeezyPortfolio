import LabProjectLayout, { LabRelated, LabSection } from "@/components/LabProjectLayout";
import { PlainList } from "@/components/WorkDetail";

export const metadata = {
  title: "Estate access control",
  description: "A TOTP hardware token system for estate vehicle barriers and pedestrian strikes.",
};

export default function EstateAccessPage() {
  return (
    <LabProjectLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: "Estate access control" }]}
      status="Design and documentation"
      category="Hardware • Security"
      title="Estate access control"
      hook={<>A TOTP hardware token system for estate vehicle barriers and pedestrian strikes.</>}
      links={[{ label: "← All work", href: "/work" }]}
    >
      <LabSection title="key_facts">
        <PlainList
          items={[
            <>
              <strong className="text-fg-strong">RP2350</strong> on a Raspberry Pi Pico 2 W.
            </>,
            <>
              <strong className="text-fg-strong">TOTP</strong> with HMAC-SHA1.
            </>,
          ]}
        />
      </LabSection>

      <LabRelated
        href="/lab/hardware-totp-token"
        label="Hardware TOTP Token, the TOTP core this design builds on."
      />
    </LabProjectLayout>
  );
}
