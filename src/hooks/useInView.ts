"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15): [
  (node: HTMLDivElement | null) => void,
  boolean,
] {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  const callbackRef = useCallback(
    (node: HTMLDivElement | null) => {
      observerRef.current?.disconnect();

      if (!node) return;

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        },
        { threshold }
      );

      observerRef.current.observe(node);
    },
    [threshold]
  );

  return [callbackRef, isVisible];
}
