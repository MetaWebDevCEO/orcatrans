"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
  offsetY?: number;
  threshold?: number;
};

export default function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delayMs = 0,
  once = false,
  offsetY = 18,
  threshold = 0.15,
}: RevealProps<T>) {
  const Comp = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasRevealedRef = useRef(false);

  const style = useMemo(() => {
    return {
      transitionDelay: `${delayMs}ms`,
      ["--reveal-y" as string]: `${offsetY}px`,
    } as CSSProperties;
  }, [delayMs, offsetY]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          hasRevealedRef.current = true;
          return;
        }

        if (once && hasRevealedRef.current) return;
        setIsVisible(false);
      },
      {
        threshold,
        root: null,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <Comp
      ref={ref}
      data-state={isVisible ? "shown" : "hidden"}
      style={style}
      className={[
        "transition-all duration-700 ease-out will-change-transform will-change-opacity motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-0",
        "data-[state=hidden]:translate-y-[var(--reveal-y)] data-[state=hidden]:opacity-0 data-[state=hidden]:blur-[2px]",
        "data-[state=shown]:translate-y-0 data-[state=shown]:opacity-100 data-[state=shown]:blur-0",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </Comp>
  );
}
