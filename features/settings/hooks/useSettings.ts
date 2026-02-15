"use client";

import { useState } from "react";
import { getCsvFilename, setCsvFilename } from "@/lib/storage";

export const useSettings = () => {
  const [csvFilename, setCsvFilenameState] = useState(
    () => getCsvFilename() ?? ""
  );
  const [saved, setSaved] = useState(false);

  const saveCsvFilename = () => {
    setCsvFilename(csvFilename.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return {
    csvFilename,
    setCsvFilenameState,
    saveCsvFilename,
    saved,
  };
};
