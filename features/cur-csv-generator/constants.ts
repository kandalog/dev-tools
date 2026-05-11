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

export const TAX_OPTIONS = ["Usage", "税金"];

/** resource_tags のキー */
export const TAG_KEY_OPTIONS = ["user_name", "user_environment"];

/** resource_tags の値（------ はタグなし） */
export const TAG_VALUE_OPTIONS = ["------", "staging", "production"];

/** 新規行のタグの初期値 */
export const DEFAULT_TAG_KEY = "user_environment";
export const DEFAULT_TAG_VALUE = "staging";

export const PRODUCT_FAMILY_OPTIONS = ["Compute Instance", "Database Instance"];

export const createEmptyRow = (): RowData => ({
  date: DATE_OPTIONS[0],
  dateCustom: false,
  cost: COST_OPTIONS[0],
  costCustom: false,
  service: SERVICE_OPTIONS[0],
  serviceCustom: false,
  productFamily: PRODUCT_FAMILY_OPTIONS[0],
  productFamilyCustom: false,
  tax: TAX_OPTIONS[0],
  tagKey: DEFAULT_TAG_KEY,
  tag: DEFAULT_TAG_VALUE,
  tagCustom: false,
});
