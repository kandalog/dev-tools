"use client";

import { useBase64Encode } from "@/features/base64-encoder/hooks/useBase64Encode";
import { Base64Form } from "@/features/base64-encoder/components/Base64Form";
import { Base64Result } from "@/features/base64-encoder/components/Base64Result";
import { BaseTitle } from "@/app/components/BaseTitle";

export const Base64EncoderPage = () => {
  const { result, generate, clearResult } = useBase64Encode();

  return (
    <>
      <BaseTitle>Base64 Encoder</BaseTitle>
      <Base64Form
        hasResult={!!result}
        onGenerate={generate}
        onClearResult={clearResult}
      />
      {result && <Base64Result result={result} />}
    </>
  );
};
