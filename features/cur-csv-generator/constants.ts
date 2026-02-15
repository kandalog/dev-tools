import { RowData } from "@/features/cur-csv-generator/types";

export const DATE_OPTIONS = [
  "2025-01-01",
  "2025-02-01",
  "2025-03-01",
  "2025-04-01",
  "2025-05-01",
  "2025-06-01",
  "2025-07-01",
  "2025-08-01",
  "2025-09-01",
  "2025-10-01",
  "2025-11-01",
  "2025-12-01",
];

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

export const createEmptyRow = (): RowData => ({
  date: DATE_OPTIONS[0],
  dateCustom: false,
  cost: COST_OPTIONS[0],
  costCustom: false,
  service: SERVICE_OPTIONS[0],
  serviceCustom: false,
});
