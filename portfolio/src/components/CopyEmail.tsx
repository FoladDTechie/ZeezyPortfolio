"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Email as plain, selectable text plus a copy button. Deliberately not a
 * mailto link: many visitors have no mail client configured.
 */
export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "select">("idle");
  const textRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2400);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      // Clipboard can be blocked (insecure context, permissions): select the
      // text instead so a manual copy is one keystroke away.
      const node = textRef.current;
      const selection = window.getSelection();
      if (node && selection) {
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setStatus("select");
    }
    reset();
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <code
        ref={textRef}
        className="min-w-0 font-jetbrains-mono text-base [overflow-wrap:anywhere] text-fg-strong select-all"
      >
        {email}
      </code>
      <button
        type="button"
        onClick={copy}
        className="btn btn-secondary"
        style={{ touchAction: "manipulation" }}
      >
        {status === "copied" ? (
          <Check size={14} aria-hidden="true" />
        ) : (
          <Copy size={14} aria-hidden="true" />
        )}
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <span role="status" aria-live="polite" className="font-jetbrains-mono text-xs text-fg-subtle">
        {status === "copied" && "Email copied to clipboard."}
        {status === "select" && "Copy blocked by the browser. The address is selected; press Ctrl+C or ⌘C."}
      </span>
    </div>
  );
}
