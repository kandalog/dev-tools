"use client";

import { useState, useCallback } from "react";

export const useFileSelect = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFile = useCallback((selected: File) => {
    setFile(selected);
  }, []);

  const clearFile = useCallback(() => {
    setFile(null);
  }, []);

  return { file, handleFile, clearFile };
};
