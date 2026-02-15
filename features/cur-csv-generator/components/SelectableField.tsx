const CUSTOM_INPUT = "__custom__";

type SelectableFieldProps = {
  value: string;
  isCustom: boolean;
  options: string[];
  inputType?: "text" | "number";
  placeholder?: string;
  defaultOption: string;
  onChange: (value: string) => void;
  onToggleCustom: (isCustom: boolean, resetValue: string) => void;
};

export const SelectableField = ({
  value,
  isCustom,
  options,
  inputType = "text",
  placeholder,
  defaultOption,
  onChange,
  onToggleCustom,
}: SelectableFieldProps) => {
  if (isCustom) {
    return (
      <div className="flex gap-1">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={() => onToggleCustom(false, defaultOption)}
          className="shrink-0 cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-2 py-2 text-xs text-gray-400 hover:text-white hover:border-gray-500"
          title="選択に戻る"
        >
          ↩
        </button>
      </div>
    );
  }

  return (
    <select
      value={value}
      onChange={(e) => {
        if (e.target.value === CUSTOM_INPUT) {
          onToggleCustom(true, "");
        } else {
          onChange(e.target.value);
        }
      }}
      className="w-full cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
      <option value={CUSTOM_INPUT}>カスタム入力</option>
    </select>
  );
};
