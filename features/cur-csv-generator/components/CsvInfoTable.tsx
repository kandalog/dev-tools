import { RowData } from "@/features/cur-csv-generator/types";
import { CurRow } from "@/features/cur-csv-generator/components/CurRow";

type CsvInfoTableProps = {
  rows: RowData[];
  onUpdateRow: (index: number, updates: Partial<RowData>) => void;
  onRemoveRow: (index: number) => void;
};

export const CsvInfoTable = ({
  rows,
  onUpdateRow,
  onRemoveRow,
}: CsvInfoTableProps) => {
  return (
    <div className="space-y-4">
      {rows.map((row, index) => (
        <CurRow
          key={index}
          row={row}
          canDelete={rows.length > 1}
          onUpdate={(updates) => onUpdateRow(index, updates)}
          onRemove={() => onRemoveRow(index)}
        />
      ))}
    </div>
  );
};
