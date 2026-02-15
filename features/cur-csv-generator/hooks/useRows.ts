"use client";

import { useState } from "react";
import { RowData } from "@/features/cur-csv-generator/types";
import { createEmptyRow } from "@/features/cur-csv-generator/constants";

export const useRows = () => {
  const [rows, setRows] = useState<RowData[]>([createEmptyRow()]);

  const addRow = () => {
    setRows((prev) => [...prev, createEmptyRow()]);
  };

  const updateRow = (index: number, updates: Partial<RowData>) => {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, ...updates } : row)),
    );
  };

  const removeRow = (index: number) => {
    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  return { rows, addRow, updateRow, removeRow };
};
