"use client";

import { AWS_CUR_RECORDS } from "@/features/cur-csv-generator/assets/cur-csv-base";
import { RowData } from "@/features/cur-csv-generator/types";

// 行データをCUR形式のCSV文字列に変換する
const buildCsvString = (rows: RowData[]): string => {
  const base = AWS_CUR_RECORDS[0];
  const headers = Object.keys(base);
  const csvRows = rows.map((row) => {
    const record = { ...base };
    record.line_item_usage_start_date = `${row.date}T00:00:00.000Z`;
    record.line_item_unblended_cost = Number(row.cost);
    record.line_item_product_code = row.service;
    return headers.map((key) => {
      const val = record[key as keyof typeof record];
      const str = String(val);
      return str.includes(",") || str.includes('"') || str.includes("\n")
        ? `"${str.replace(/"/g, '""')}"`
        : str;
    });
  });

  return [headers.join(","), ...csvRows.map((r) => r.join(","))].join("\n");
};

// Blobを指定ファイル名でダウンロードする
const downloadFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

// BOM付きCSV文字列からBlobを生成する
const createCsvBlob = (csv: string): Blob => {
  const bom = "\uFEFF";
  return new Blob([bom + csv], { type: "text/csv;charset=utf-8;" });
};

export const useCsvExport = (rows: RowData[]) => {
  const generateCsv = () => {
    const blob = createCsvBlob(buildCsvString(rows));
    downloadFile(blob, "cur-report.csv");
  };

  const generateGz = async () => {
    const blob = createCsvBlob(buildCsvString(rows));
    const cs = new CompressionStream("gzip");
    const compressedStream = blob.stream().pipeThrough(cs);
    const compressedBlob = await new Response(compressedStream).blob();
    downloadFile(compressedBlob, "cur-report.csv.gz");
  };

  return { generateCsv, generateGz };
};
