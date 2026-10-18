import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";
import { PlainList } from "@/components/WorkDetail";

export const metadata = {
  title: "Self-hosted infrastructure",
  description:
    "Containerised services on on-site mini PCs and a VPS, plus the AirChain MQTT broker on Kubernetes.",
};

export default function SelfHostedPage() {
  return (
    <LabProjectLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: "Self-hosted infrastructure" }]}
      status="Ongoing"
      category="Infrastructure"
      title="Self-hosted infrastructure"
      hook={
        <>
          Containerised services on on-site mini PCs and a VPS, plus the AirChain MQTT broker on
          Kubernetes.
        </>
      }
      links={[
        { label: "AirChain node", href: "/work/airchain" },
        { label: "← All work", href: "/work" },
      ]}
    >
      <LabSection title="key_facts">
        <PlainList
          items={[
            <>
              <strong className="text-fg-strong">3</strong> broker listeners: 8883, 443 and 8084.
            </>,
          ]}
        />
      </LabSection>
    </LabProjectLayout>
  );
}
