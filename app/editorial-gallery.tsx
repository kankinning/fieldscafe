"use client";
import { useEffect, useRef, useState } from "react";
export function EditorialGallery({
  items,
}: {
  items: { src: string; alt: string; label: string }[];
}) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdges({
        start: el.scrollLeft < 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    const frame = requestAnimationFrame(update);
    const resize = new ResizeObserver(update);
    resize.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);
  function move(direction: number) {
    const el = track.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth * 0.7,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }
  return (
    <div className="editorial-gallery">
      <div
        className="gallery-track"
        ref={track}
        aria-label="A taste of Fields photography"
        tabIndex={0}
      >
        {items.map((item, i) => (
          <figure key={item.src + i}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>
              <span>0{i + 1}</span>
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-controls">
        <p className="small">A taste of the everyday.</p>
        <div>
          <button
            onClick={() => move(-1)}
            disabled={edges.start}
            aria-label="Previous photographs"
          >
            Previous
          </button>
          <span aria-hidden="true">/</span>
          <button
            onClick={() => move(1)}
            disabled={edges.end}
            aria-label="Next photographs"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
