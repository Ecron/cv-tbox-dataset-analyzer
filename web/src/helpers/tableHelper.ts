import { ScaleType } from "recharts/types/util/types";
import { PRIMARY_COLOR } from "../components/ui/theme";

//======================================
//== Table Styling
//======================================
export const TABLE_STYLE = {
  headRow: {
    style: {
      backgroundColor: PRIMARY_COLOR,
      // backgroundColor: "#ee9a9d",
      color: "#ffffff",
    },
  },
};

//======================================
//== Tab Views
//======================================

export type DATASET_INFO_VIEW_TYPE =
  | "general"
  | "duration"
  | "voices"
  | "gender"
  | "age"
  | "votes"
  | "sentences"
  | "text-corpus";
// | "comperative"
// | "health"

export const DATASET_INFO_VIEW_TYPES: DATASET_INFO_VIEW_TYPE[] = [
  "general",
  "duration",
  "voices",
  "gender",
  "age",
  "votes",
  "sentences",
  "text-corpus",
  // "comperative",
  // "health",
];

//======================================
//== Support Matrix
//======================================

export type SUPPORT_MATRIX_ROW_TYPE = {
  lc: string;
  lang: string;

  v11_0: string | null;
  v10_0: string | null;
  v9_0: string | null;
  v8_0: string | null;
  v7_0: string | null;
  v6_1: string | null;
  v5_1: string | null;
  v4: string | null;
  v3: string | null;
  v2: string | null;
  v1: string | null;
};

//======================================
//== Split Statistics tables
//======================================

export type DATASET_INFO_ROW_TYPE = {
  // unique identifier for split
  ver: string; // cv version in format 11.0
  lc: string; // language code
  alg: string; // algorithm code s1, s99, v1
  sp: string; // split id
  //
  clips: number; // number of splits in the split
  uq_v: number; // unique voices from split data
  uq_s: number; // unique sentences from split data
  uq_sl: number; // unique lowercase sentences from split data
  // duration info
  dur_total: number; // total duration measured from clips
  dur_mean: number; // mean duration measured from clips
  dur_median: number; // median duration measured from clips
  dur_freq: string | number[]; // frequency distributions of durations
  // voices
  v_mean: number;
  v_median: number;
  v_freq: string | number[];
  // sentences
  s_mean: number;
  s_median: number;
  s_freq: string | number[];
  // votes
  votes: string | number[][];
  // demographics
  dem_table: string | number[][];
  dem_uq: string | number[][];
  dem_fix_r: string | number[][];
  dem_fix_v: string | number[][];

  // CALCULATED VALUES (should be here for graph support)
  dem_ctable?: number[][];
  dem_cuq?: number[][];

  calc_votes_total?: number;

  calc_genders_male?: number;
  calc_genders_female?: number;
  calc_genders_fm_ratio?: number;
  calc_genders_male_per?: number;
  calc_genders_female_per?: number;
  calc_genders_uq_male?: number;
  calc_genders_uq_female?: number;
  calc_genders_fm_uq_ratio?: number;

  calc_age_0_39?: number;
  calc_age_40_69?: number;
  calc_age_70_99?: number;
  calc_age_uq_0_39?: number;
  calc_age_uq_40_69?: number;
  calc_age_uq_70_99?: number;

  // xxx?: string | number;
};

// For temporary tables to view algorithm-vs-split data
export type CROSSTAB_ROW_TYPE = {
  alg: string; // algorithm code s1, s99, v1
  train: number; // value for train split
  dev: number; // value for dev split
  test: number; // value for test split
};


export const DATASET_INFO_DURATION_BINS: number[] = [
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99,
];

export const DATASET_INFO_VOICE_BINS: number[] = [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536, // 999999,
];

export const DATASET_INFO_SENTENCE_BINS: number[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  20,
  30,
  40,
  50,
  100, // 999999,
];

//======================================
//== Text Corpus Statistics
//======================================

export type TEXT_CORPUS_STATS_ROW_TYPE = {
  lc: string;
  s_cnt: number;
  uq_s: number;
  uq_n: number;
  has_val: number;
  val: number;

  c_total: number;
  c_mean: number;
  c_median: number;
  c_freq: string | number[];

  w_total: number;
  w_mean: number;
  w_median: number;
  w_freq: string | number[];

  t_total: number;
  t_mean: number;
  t_median: number;
  t_freq: string | number[];
};

export const TEXT_CORPUS_CHAR_BINS: number[] = [
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110,
  120,
  130,
  140,
  150, //, 99999,
];

export const TEXT_CORPUS_WORD_BINS: number[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20, //, 99999,
];

export const TEXT_CORPUS_TOKEN_BINS: number[] = [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536, //, 999999,
];

// SEPARATORS
export const SEP_ROW: string = "|";
export const SEP_COL: string = "#";
export const SEP_ALGO: string = "|";

// Frequency Tables
export interface IFreqTableProps {
  bins: number[] | string[];
  values: number[] | string[];
  title: string;
  yScale: ScaleType;
  mean?: number;
  median?: number;
  dropLastFromGraph?: boolean;
}

export interface IFreqTableRow {
  bin: number | string;
  val: number | string;
}

export interface IFreqTableProps2D {
  data: number[][];
  colHeadings: string[];
  rowHeadings: string[];
  title: string;
}

export interface IFreqTableRow2D {
  val: number | string;
}

//
// Methods
//

export const convertStrList = (s: string): number[] => {
  return s === "" ? [] : s.split(SEP_COL).map((x) => Number(x));
};

export const convertStrArr = (s: string): number[][] => {
  return s === "" ? [] : s.split(SEP_ROW).map((s) => convertStrList(s));
};

export const getLastCol = (arr: number[][]): number[] => {
  let res: number[] = [];
  arr.forEach((row) => {
    res.push(row[row.length - 1] as number);
  });
  return res;
};

export const getLastRow = (arr: number[][]): number[] => {
  return arr[arr.length - 1];
};

export const getTotal = (arr: number[][]): number => {
  const lstRow = getLastRow(arr);
  return lstRow[lstRow.length - 1];
};

export const listDivide = (lst1: number[], lst2: number[]): number[] => {
  return lst1.map((val1, index) =>
    lst2[index] === 0 ? 0 : val1 / lst2[index],
  );
};

export const sumArrays = (a1: number[][], a2: number[][]): number[][] => {
  if (!a1 || !a2 || a1.length !== a2.length || a1[0].length !== a2[0].length) {
    console.log("PROGRAMMER ERROR in sumArrays!");
    return [];
  }
  const res: number[][] = JSON.parse(JSON.stringify(a1));
  a2.forEach((row, i) => row.forEach((cell, j) => (res[i][j] += cell)));
  return res;
};

export const addTotals = (
  arr: number[][],
  negate: boolean = false,
): number[][] => {
  // const rowCnt: number = arr.length;
  const colCnt: number = arr[0].length;
  let res: number[][] = JSON.parse(JSON.stringify(arr));
  let totalRow: number[] = new Array(colCnt + 1).fill(0);
  const multiplier = negate ? -1 : 1;
  // handle rows to add a new column
  arr.forEach((row, i) => {
    let rowTotal = 0;
    row.forEach((cell, j) => {
      rowTotal += multiplier * cell;
      totalRow[j] += multiplier * cell;
      totalRow[colCnt] += multiplier * cell;
    });
    res[i][colCnt] = rowTotal;
  });
  res.push(totalRow);
  // console.log(res);
  return res;
};

export const expandTable = (arr: number[][]): number[][] => {
  return addTotals(addTotals(arr, true));
};

export const selectFromDataset = (
  algos: string[],
  splits: string[],
  columns: string[],
) => {};
