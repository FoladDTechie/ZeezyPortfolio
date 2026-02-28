"use client";

import { useState, useEffect } from "react";

const terminalMessages = [
  "[system]: lagos_node_active",
  "[focus]: airchain_infrastructure", 
  "[status]: available_for_writing"
];

export default function FloatingTerminal() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentMessage = terminalMessages[currentMessageIndex];
    
    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentMessageIndex((prev) => (prev + 1) % terminalMessages.length);
          setDisplayedText("");
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isTyping, currentMessageIndex]);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
      <div className="w-[180px] h-[60px] bg-black/30 backdrop-blur-[8px] border border-[#222] rounded-[4px] p-3 flex items-center justify-center">
        <div className="font-mono text-[10px] text-green-400 font-['IBM_Plex_Mono'] tracking-wider">
          <span className="inline-block">{displayedText}</span>
          <span className="inline-block w-[6px] h-[10px] bg-green-400 ml-[2px] animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
