"use client";

import { useRef, useState, useCallback } from "react";

type FileDropZoneProps = {
  file: File | null;
  onFile: (file: File) => void;
};

export const FileDropZone = ({ file, onFile }: FileDropZoneProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
    },
    []
  );

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const dropped = e.dataTransfer.files[0];
      if (dropped) onFile(dropped);
    },
    [onFile]
  );

  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0];
      if (selected) onFile(selected);
    },
    [onFile]
  );

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex h-48 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
        isDragging
          ? "border-blue-400 bg-blue-950/30"
          : "border-gray-600 bg-gray-900 hover:border-gray-400"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        className="hidden"
      />
      {file ? (
        <p className="text-white text-sm">
          選択中: <span className="font-medium">{file.name}</span>
        </p>
      ) : (
        <p className="text-gray-400 text-sm">
          クリックしてファイルを選択、またはドラッグ＆ドロップ
        </p>
      )}
    </div>
  );
};
