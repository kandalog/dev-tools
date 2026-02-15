type ActionButtonsProps = {
  onCancel: () => void;
  onGenerate: () => void;
  disabledCancel: boolean;
  disabledGenerate: boolean;
};

export const ActionButtons = ({
  onCancel,
  onGenerate,
  disabledCancel,
  disabledGenerate,
}: ActionButtonsProps) => {
  return (
    <div className="mt-6 flex gap-3">
      <button
        onClick={onCancel}
        disabled={disabledCancel}
        className="cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white hover:border-gray-500 hover:bg-gray-750 disabled:cursor-not-allowed disabled:opacity-40"
      >
        キャンセル
      </button>
      <button
        onClick={onGenerate}
        disabled={disabledGenerate}
        className="cursor-pointer rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        生成
      </button>
    </div>
  );
};
