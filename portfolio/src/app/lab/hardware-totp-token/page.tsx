import LabProjectLayout, { LabSection } from "@/components/LabProjectLayout";

export const metadata = {
  title: "Hardware TOTP Token — the_lab",
  description:
    "A standalone hardware 2FA token generator on a Raspberry Pi Pico 2 W, with HMAC-SHA1, base32, and the HTTP server all hand-rolled in MicroPython.",
};

export default function HardwareTotpTokenPage() {
  return (
    <LabProjectLayout
      projectId="0x03"
      status="FUNCTIONAL"
      category="HARDWARE • CRYPTOGRAPHY"
      title="Hardware TOTP Token"
      hook={
        <>
          A standalone hardware 2FA token generator on a Raspberry Pi Pico 2 W —
          with every piece of the crypto hand-rolled in MicroPython. No app, no
          internet, no external crypto libraries.
        </>
      }
      links={[
        {
          label: "[REPO →]",
          href: "https://github.com/FoladDTechie/hardware-totp-token",
        },
        { label: "[BACK_TO_LAB →]", href: "/lab" },
      ]}
    >
      <LabSection title="the_idea">
        <p>
          Every banking app and authenticator app on your phone generates 6-digit
          codes using TOTP (RFC 6238): a shared secret plus the current time, run
          through HMAC-SHA1, sliced down to six digits, refreshed every 30
          seconds. Both sides compute it independently — no message ever sent
          back and forth.
        </p>
        <p>
          This project implements that entire stack from raw primitives on a
          five-dollar microcontroller, to actually understand how TOTP works
          under the hood rather than trust it as a black box. It then became
          something bigger: a three-tiered build structured as a live hardware
          workshop, so other people could take the same path from &quot;flash
          and go&quot; to &quot;implement the cryptography yourself.&quot;
        </p>
      </LabSection>

      <LabSection title="how_it_works">
        <pre className="font-jetbrains-mono text-xs text-gray-500 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 overflow-x-auto leading-normal">
{`[Phone connects directly]
        |
        |  Pico 2 W running its own WiFi AP — no venue/internet needed
        v
[Hand-built HTTP server]
        |
        |  raw sockets, no frameworks
        v
[Base32 decoder — hand-rolled]
        |
        |  parses a real secret pasted from an existing authenticator app
        v
[HMAC-SHA1 — built manually from hashlib.sha1, per RFC 2104]
        |
        v
[TOTP per RFC 6238 — 30s step, 6-digit output]`}
        </pre>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>WiFi AP mode on the Pico — the phone connects directly, no external network required</li>
          <li>Raw <code>socket</code>-based HTTP server, no external libraries</li>
          <li>Base32 decoder written from scratch for secret parsing</li>
          <li>
            HMAC-SHA1 constructed by hand from <code>hashlib.sha1</code>, since
            MicroPython doesn&apos;t bundle an <code>hmac</code> module
          </li>
          <li>Time set manually via a web form, since there&apos;s no NTP in AP-only mode</li>
        </ul>
      </LabSection>

      <LabSection title="build_it_yourself">
        <p className="text-gray-200 font-semibold">Tiered build</p>
        <p>This became a workshop structure, not just a personal project:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li><strong>Beginner</strong> — pre-built firmware, flash and go, single account</li>
          <li><strong>Intermediate</strong> — multi-account routing, JS auto-refresh instead of full-page reload</li>
          <li>
            <strong>Advanced</strong> — hand-implement the HMAC-SHA1 construction
            yourself from the SHA1 primitive, plus a concurrency stretch goal
            (the raw socket server only handles one connection at a time by
            default)
          </li>
        </ul>
        <p className="text-gray-200 font-semibold pt-2">Hardware</p>
        <p>Raspberry Pi Pico 2 W. That&apos;s it.</p>
      </LabSection>

      <LabSection title="what_i_learned">
        <p>
          MicroPython&apos;s string type doesn&apos;t implement{" "}
          <code>.zfill()</code> — a method that just exists for free in desktop
          Python. Found that the hard way on real hardware, fixed with manual
          zero-padding. Small thing, but a good example of how MicroPython&apos;s
          stdlib is a trimmed-down subset, not a drop-in match for CPython. The
          same lesson showed up with <code>hmac</code> and base32 decoding —
          anything you assume is &quot;standard library&quot; needs to be
          checked before you&apos;re two hours into debugging why it
          doesn&apos;t exist.
        </p>
      </LabSection>

      <LabSection title="what_comes_next">
        <p>
          The same TOTP core is a legitimate building block for access control,
          not just logins. Point the verification side at a relay instead of a
          webpage and it becomes a rotating-code gate lock instead of a
          rotating-code login. That&apos;s an active second track being scoped
          separately — estate gate access, time-boxed visitor codes, layering on
          top of existing intercom systems.
        </p>
        <ul className="space-y-1.5 text-gray-400">
          <li>[ ] Concurrency fix for the raw socket server (currently one connection at a time)</li>
          <li>[ ] Scope the gate-access track separately</li>
          <li>[ ] Write the GitHub README</li>
        </ul>
      </LabSection>
    </LabProjectLayout>
  );
}
