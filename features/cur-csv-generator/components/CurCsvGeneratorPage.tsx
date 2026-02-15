"use client";

import { useRows } from "@/features/cur-csv-generator/hooks/useRows";
import { useCsvExport } from "@/features/cur-csv-generator/hooks/useCsvExport";
import { ActionButtons } from "@/features/cur-csv-generator/components/ActionButtons";
import { CsvInfoTable } from "@/features/cur-csv-generator/components/CsvInfoTable";
import { BaseTitle } from "@/app/components/BaseTitle";

export const CurCsvGeneratorPage = () => {
  const { rows, addRow, updateRow, removeRow } = useRows();
  const { generateCsv, generateGz } = useCsvExport(rows);

  return (
    <>
      <BaseTitle>CUR CSV Generator</BaseTitle>
      <CsvInfoTable
        rows={rows}
        onUpdateRow={updateRow}
        onRemoveRow={removeRow}
      />
      <ActionButtons
        onAddRow={addRow}
        onGenerateCsv={generateCsv}
        onGenerateGz={generateGz}
      />
    </>
  );
};
