"use client";

import { useFileSelect } from "@/features/base64-encoder/hooks/useFileSelect";
import { FileDropZone } from "@/features/base64-encoder/components/FileDropZone";
import { ActionButtons } from "@/features/base64-encoder/components/ActionButtons";

type Base64FormProps = {
  hasResult: boolean;
  onGenerate: (file: File) => void;
  onClearResult: () => void;
};

export const Base64Form = ({
  hasResult,
  onGenerate,
  onClearResult,
}: Base64FormProps) => {
  const { file, handleFile, clearFile } = useFileSelect();

  const handleCancel = () => {
    clearFile();
    onClearResult();
  };

  const handleGenerate = () => {
    if (file) onGenerate(file);
  };

  return (
    <>
      <FileDropZone file={file} onFile={handleFile} />
      <ActionButtons
        onCancel={handleCancel}
        onGenerate={handleGenerate}
        disabledCancel={!file && !hasResult}
        disabledGenerate={!file}
      />
    </>
  );
};
