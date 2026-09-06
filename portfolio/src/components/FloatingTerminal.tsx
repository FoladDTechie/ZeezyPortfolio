"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const terminalMessages = [
  "[system]: uyo_node_active",
  "[focus]: airchain_infrastructure",
  "[status]: open_to_collaboration",
];

/**
 * Decorative status ticker. Hidden from assistive tech: it repeats information
 * already in the page content, and a character-by-character live region would
 * be hostile to screen readers.
 */
export default function FloatingTerminal() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const message = terminalMessages[index];

    if (typing) {
      if (text.length < message.length) {
        const t = setTimeout(() => setText(message.slice(0, text.length + 1)), 55);
        return () => clearTimeout(t);
      }
      // Hold the finished line, then advance. Both transitions happen inside
      // timers so nothing sets state synchronously during the effect.
      const t = setTimeout(() => setTyping(false), 2400);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setTyping(true);
      setIndex((prev) => (prev + 1) % terminalMessages.length);
      setText("");
    }, 0);
    return () => clearTimeout(t);
  }, [text, typing, index, reduce]);

  return (
    <div aria-hidden="true" className="fixed right-6 bottom-6 z-40 hidden lg:block">
      <div className="flex h-[52px] w-[240px] items-center rounded-chip border border-line bg-black/40 px-3 backdrop-blur-md">
        <span className="font-jetbrains-mono text-[11px] tracking-wide text-accent">
          {reduce ? terminalMessages[0] : text}
          {!reduce && <span className="cursor-blink" />}
        </span>
      </div>
    </div>
  );
}
