type ActionButtonsProps = {
  onAddRow: () => void;
  onGenerateCsv: () => void;
  onGenerateGz: () => void;
};

export const ActionButtons = ({
  onAddRow,
  onGenerateCsv,
  onGenerateGz,
}: ActionButtonsProps) => {
  return (
    <div className="mt-6 flex gap-3">
      <button
        onClick={onAddRow}
        className="cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white hover:border-gray-500 hover:bg-gray-750"
      >
        ＋ 行を追加
      </button>
      <button
        onClick={onGenerateCsv}
        className="cursor-pointer rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-500"
      >
        CSVを生成
      </button>
      <button
        onClick={onGenerateGz}
        className="cursor-pointer rounded-lg bg-emerald-600 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-500"
      >
        CSV (gz) を生成
      </button>
    </div>
  );
};
