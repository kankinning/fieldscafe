"use client";
import { useEffect, useRef } from "react";
export function Entrance() {
  const overlay = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      if (sessionStorage.getItem("fields-editorial-welcome")) {
        overlay.current?.classList.add("arrival-skip");
        return;
      }
      sessionStorage.setItem("fields-editorial-welcome", "1");
    } catch {}
  }, []);
  return (
    <div ref={overlay} className="arrival" aria-hidden="true">
      <div>
        <span>Stay.</span>
        <span>
          <i>Play.</i>
        </span>
        <span>Take away.</span>
      </div>
      <p>FIELDS CAFÉ · ALBANY</p>
    </div>
  );
}
