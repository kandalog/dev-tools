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
      <div className="grid grid-cols-[1fr_1fr_1fr_40px] gap-3">
        <span className="text-sm font-medium text-gray-400">日付</span>
        <span className="text-sm font-medium text-gray-400">コスト</span>
        <span className="text-sm font-medium text-gray-400">
          AWS Service
        </span>
        <span />
      </div>

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
