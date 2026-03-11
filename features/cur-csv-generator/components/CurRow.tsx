import { SelectableField } from "@/features/cur-csv-generator/components/SelectableField";
import { FieldItem } from "@/features/cur-csv-generator/components/FieldItem";
import { RowData } from "@/features/cur-csv-generator/types";
import { DATE_OPTIONS, COST_OPTIONS, SERVICE_OPTIONS, TAX_OPTIONS, TAG_OPTIONS } from "@/features/cur-csv-generator/constants";

type CurRowProps = {
  row: RowData;
  canDelete: boolean;
  onUpdate: (updates: Partial<RowData>) => void;
  onRemove: () => void;
};

export const CurRow = ({ row, canDelete, onUpdate, onRemove }: CurRowProps) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_auto_auto_40px] gap-3 items-end">
      <FieldItem label="日付">
        <SelectableField
          value={row.date}
          isCustom={row.dateCustom}
          options={DATE_OPTIONS}
          placeholder="YYYY-MM-DD"
          defaultOption={DATE_OPTIONS[0]}
          onChange={(date) => onUpdate({ date })}
          onToggleCustom={(isCustom, resetValue) =>
            onUpdate({ dateCustom: isCustom, date: resetValue })
          }
        />
      </FieldItem>

      <FieldItem label="コスト">
        <SelectableField
          value={row.cost}
          isCustom={row.costCustom}
          options={COST_OPTIONS}
          inputType="number"
          placeholder="金額を入力"
          defaultOption={COST_OPTIONS[0]}
          onChange={(cost) => onUpdate({ cost })}
          onToggleCustom={(isCustom, resetValue) =>
            onUpdate({ costCustom: isCustom, cost: resetValue })
          }
        />
      </FieldItem>

      <FieldItem label="AWS Service">
        <SelectableField
          value={row.service}
          isCustom={row.serviceCustom}
          options={SERVICE_OPTIONS}
          placeholder="サービス名を入力"
          defaultOption={SERVICE_OPTIONS[0]}
          onChange={(service) => onUpdate({ service })}
          onToggleCustom={(isCustom, resetValue) =>
            onUpdate({ serviceCustom: isCustom, service: resetValue })
          }
        />
      </FieldItem>

      <FieldItem label="税金">
        <select
          value={row.tax}
          onChange={(e) => onUpdate({ tax: e.target.value })}
          className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
        >
          {TAX_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </FieldItem>

      <FieldItem label="タグ">
        <select
          value={row.tag}
          onChange={(e) => onUpdate({ tag: e.target.value })}
          className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
        >
          {TAG_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </FieldItem>

      <button
        onClick={onRemove}
        disabled={!canDelete}
        className="cursor-pointer rounded-lg border border-gray-700 bg-gray-800 p-2 text-gray-400 hover:text-red-400 hover:border-red-400 disabled:opacity-30 disabled:cursor-not-allowed"
        title="行を削除"
      >
        ✕
      </button>
    </div>
  );
};
