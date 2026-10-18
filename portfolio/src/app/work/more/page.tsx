import LabProjectLayout, { LabRelated, LabSection } from "@/components/LabProjectLayout";
import { PlainList } from "@/components/WorkDetail";

export const metadata = {
  title: "More builds — Azeez Bello",
  description:
    "Estate access control with TOTP hardware tokens, self-hosted infrastructure, and the Merkle Tree Anchor research project.",
};

function Meta({ children }: { children: string }) {
  return <p className="font-jetbrains-mono text-xs tracking-wide text-fg-subtle">{children}</p>;
}

export default function MoreBuildsPage() {
  return (
    <LabProjectLayout
      category="SHORT BUILD NOTES"
      title="More builds"
      hook={<>Shorter notes on builds that do not have a full write-up yet.</>}
      links={[{ label: "[BACK_TO_WORK →]", href: "/#work" }]}
    >
      <LabSection id="estate-access" title="estate_access_control">
        <Meta>Design and documentation</Meta>
        <p>
          A TOTP hardware token system for estate vehicle barriers and pedestrian strikes.
        </p>
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
        <LabRelated
          href="/lab/hardware-totp-token"
          label="Hardware TOTP Token, the TOTP core this design builds on."
        />
      </LabSection>

      <LabSection id="self-hosted" title="self_hosted_infrastructure">
        <Meta>Ongoing</Meta>
        <p>
          Containerised services on on-site mini PCs and a VPS, plus the AirChain MQTT broker on
          Kubernetes.
        </p>
        <PlainList
          items={[
            <>
              <strong className="text-fg-strong">3</strong> broker listeners: 8883, 443 and 8084.
            </>,
          ]}
        />
      </LabSection>

      <LabSection id="merkle-tree-anchor" title="merkle_tree_anchor">
        <Meta>Research · plutus v3, aiken</Meta>
        <p>Cryptographic proof mechanism for sensor data integrity on Cardano.</p>
      </LabSection>
    </LabProjectLayout>
  );
}
