"use client";

import { useState, useCallback, useRef } from "react";

export const useCopyClipboard = () => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return { copied, copy };
};
