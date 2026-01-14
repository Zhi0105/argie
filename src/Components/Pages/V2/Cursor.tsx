import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

export const Cursor = () => {
  const cursorOutline = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const mouseX = useRef(-10);
  const mouseY = useRef(-10);

  const outlineX = useRef(0);
  const outlineY = useRef(0);

  const [hoverButton, setHoverButton] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      const dx = mouseX.current - outlineX.current;
      const dy = mouseY.current - outlineY.current;

      outlineX.current += dx * CURSOR_SPEED;
      outlineY.current += dy * CURSOR_SPEED;

      const el = cursorOutline.current;
      if (el) {
        // translate handles centering so left/top can be exact
        el.style.left = `${outlineX.current}px`;
        el.style.top = `${outlineY.current}px`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const mouseOverListener = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tag = target.tagName.toLowerCase();
      const parentTag = target.parentElement?.tagName.toLowerCase();

      if (
        tag === "button" ||
        parentTag === "button" ||
        tag === "input" ||
        tag === "textarea" ||
        tag === "a" // optional: links feel nicer
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    };

    document.addEventListener("mouseover", mouseOverListener);
    return () => document.removeEventListener("mouseover", mouseOverListener);
  }, []);

  return (
    <div
      ref={cursorOutline}
      className={`invisible md:visible z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
          hoverButton
            ? "bg-transparent border-2 border-indigo-900 w-5 h-5"
            : "bg-indigo-500 w-3 h-3"
        }`}
    />
  );
};
