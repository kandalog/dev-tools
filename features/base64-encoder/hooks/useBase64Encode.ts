"use client";

import { useState, useCallback } from "react";

export const useBase64Encode = () => {
  const [result, setResult] = useState<string | null>(null);

  const generate = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const base64 = dataUrl.replace(/^data:[^;]+;base64,/, "");
      setResult(base64);
    };
    reader.readAsDataURL(file);
  }, []);

  const clearResult = useCallback(() => {
    setResult(null);
  }, []);

  return { result, generate, clearResult };
};
