import { SelectableField } from "@/features/cur-csv-generator/components/SelectableField";
import { FieldItem } from "@/features/cur-csv-generator/components/FieldItem";
import { RowData } from "@/features/cur-csv-generator/types";
import {
  DATE_OPTIONS,
  COST_OPTIONS,
  SERVICE_OPTIONS,
  PRODUCT_FAMILY_OPTIONS,
  TAX_OPTIONS,
  TAG_KEY_OPTIONS,
  TAG_VALUE_OPTIONS,
  DEFAULT_TAG_VALUE,
} from "@/features/cur-csv-generator/constants";

type CurRowProps = {
  row: RowData;
  canDelete: boolean;
  onUpdate: (updates: Partial<RowData>) => void;
  onRemove: () => void;
};

export const CurRow = ({ row, canDelete, onUpdate, onRemove }: CurRowProps) => {
  return (
    <div
      className={[
        "flex w-full min-w-0 flex-col gap-3",
        /* lg: 1行7列（内側の contents で子が直接グリッドに乗る） */
        "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto_minmax(0,12rem)_2.5rem] lg:items-start lg:gap-3",
      ].join(" ")}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:contents">
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

        <FieldItem label="ファミリー">
          <SelectableField
            value={row.productFamily}
            isCustom={row.productFamilyCustom}
            options={PRODUCT_FAMILY_OPTIONS}
            placeholder="product family を入力"
            defaultOption={PRODUCT_FAMILY_OPTIONS[0]}
            customOptionLabel="手動入力"
            onChange={(productFamily) => onUpdate({ productFamily })}
            onToggleCustom={(isCustom, resetValue) =>
              onUpdate({ productFamilyCustom: isCustom, productFamily: resetValue })
            }
          />
        </FieldItem>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-3 lg:contents">
        <div className="w-full shrink-0 md:w-auto md:min-w-26 lg:min-w-0">
          <FieldItem label="税金">
            <select
              value={row.tax}
              onChange={(e) => onUpdate({ tax: e.target.value })}
              className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 md:max-lg:min-w-26"
            >
              {TAX_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </FieldItem>
        </div>

        <div className="min-w-0 w-full flex-1">
          <FieldItem label="タグ">
            <div className="flex flex-col gap-2">
              <select
                value={row.tagKey}
                onChange={(e) => onUpdate({ tagKey: e.target.value })}
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
              >
                {TAG_KEY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <SelectableField
                value={row.tag}
                isCustom={row.tagCustom}
                options={TAG_VALUE_OPTIONS}
                placeholder="タグ値を入力"
                defaultOption={DEFAULT_TAG_VALUE}
                onChange={(tag) => onUpdate({ tag })}
                onToggleCustom={(isCustom, resetValue) =>
                  onUpdate({ tagCustom: isCustom, tag: resetValue })
                }
              />
            </div>
          </FieldItem>
        </div>

        <button
          type="button"
          onClick={onRemove}
          disabled={!canDelete}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center self-end rounded-lg border border-gray-700 bg-gray-800 text-gray-400 hover:border-red-400 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-30 md:self-end lg:justify-self-end"
          title="行を削除"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
