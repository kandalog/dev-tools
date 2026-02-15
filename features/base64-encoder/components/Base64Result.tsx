"use client";

import { useCopyClipboard } from "@/features/base64-encoder/hooks/useCopyClipboard";

type Base64ResultProps = {
  result: string;
};

export const Base64Result = ({ result }: Base64ResultProps) => {
  const { copied, copy } = useCopyClipboard();

  return (
    <div className="mt-6 rounded-lg border border-gray-700 bg-gray-900 p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm text-gray-400">生成結果</p>
        <button
          onClick={() => copy(result)}
          className="cursor-pointer rounded border border-gray-600 bg-gray-800 px-3 py-1 text-xs text-gray-300 hover:border-gray-400 hover:text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap break-all text-sm text-white select-all">
        {result}
      </pre>
    </div>
  );
};
