import { RowData } from "@/features/cur-csv-generator/types";

const generateDateOptions = (): string[] => {
  const options: string[] = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    options.push(`${yyyy}-${mm}-01`);
  }
  return options;
};

export const createEmptyRow = (): RowData => ({
  date: DATE_OPTIONS[0],
  dateCustom: false,
  cost: COST_OPTIONS[0],
  costCustom: false,
  service: SERVICE_OPTIONS[0],
  serviceCustom: false,
});

export const DATE_OPTIONS = generateDateOptions();

export const COST_OPTIONS = ["100", "500", "1000", "5000", "10000"];

export const SERVICE_OPTIONS = [
  "AmazonEC2",
  "AmazonS3",
  "AmazonRDS",
  "AmazonECS",
  "AWSLambda",
  "AmazonCloudFront",
  "AmazonDynamoDB",
  "AmazonSNS",
  "AmazonSQS",
  "AWSCloudTrail",
];
