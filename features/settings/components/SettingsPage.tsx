"use client";

import { useSettings } from "@/features/settings/hooks/useSettings";

export const SettingsPage = () => {
  const { csvFilename, setCsvFilenameState, saveCsvFilename, saved } =
    useSettings();

  return (
    <div className="space-y-8">
      <section className="rounded-lg bg-gray-900 p-6">
        <h3 className="mb-4 text-lg font-semibold text-white">
          CSV エクスポート設定
        </h3>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="csvFilename"
              className="mb-1 block text-sm text-gray-400"
            >
              出力ファイル名（拡張子不要）
            </label>
            <div className="flex gap-3">
              <input
                id="csvFilename"
                type="text"
                value={csvFilename}
                onChange={(e) => setCsvFilenameState(e.target.value)}
                placeholder="例: cur-report"
                className="flex-1 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={saveCsvFilename}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                {saved ? "保存しました" : "保存"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
