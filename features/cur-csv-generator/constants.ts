import { RowData } from "@/features/cur-csv-generator/types";

export const DATE_OPTIONS = [
  "2026-01-01",
  "2026-02-01",
  "2026-03-01",
  "2026-04-01",
  "2026-05-01",
  "2026-06-01",
  "2026-07-01",
  "2026-08-01",
  "2026-09-01",
  "2026-10-01",
  "2026-11-01",
  "2026-12-01",
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

export const TAX_OPTIONS = ["------", "税金"];

export const TAG_OPTIONS = ["------"];

export const createEmptyRow = (): RowData => ({
  date: DATE_OPTIONS[0],
  dateCustom: false,
  cost: COST_OPTIONS[0],
  costCustom: false,
  service: SERVICE_OPTIONS[0],
  serviceCustom: false,
  tax: TAX_OPTIONS[0],
  tag: TAG_OPTIONS[0],
});
