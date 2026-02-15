const STORAGE_KEYS = {
  CSV_FILENAME: "settings:csvFilename",
} as const;

export const getCsvFilename = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEYS.CSV_FILENAME) || null;
};

export const setCsvFilename = (name: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.CSV_FILENAME, name);
};
