import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";
import { PlainList } from "@/components/WorkDetail";

export const metadata = {
  title: "Merkle Tree Anchor",
  description: "Cryptographic proof mechanism for sensor data integrity on Cardano.",
};

export default function MerkleTreeAnchorPage() {
  return (
    <LabProjectLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: "Merkle Tree Anchor" }]}
      status="Research"
      category="Cardano • Data integrity"
      title="Merkle Tree Anchor"
      hook={<>Cryptographic proof mechanism for sensor data integrity on Cardano.</>}
      links={[{ label: "← All work", href: "/work" }]}
    >
      <LabSection title="stack">
        <PlainList items={["Plutus V3", "Aiken"]} />
      </LabSection>
    </LabProjectLayout>
  );
}
