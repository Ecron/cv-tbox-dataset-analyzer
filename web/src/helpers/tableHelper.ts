import { ScaleType } from "recharts/types/util/types";
import { PRIMARY_COLOR } from "../components/ui/theme";

//======================================
//== Table Styling
//======================================
export const TABLE_STYLE = {
  header: {
    style: {
      paddingLeft: "4px",
      paddingRight: "4px",
    },
  },
  headRow: {
    style: {
      backgroundColor: PRIMARY_COLOR,
      color: "#ffffff",
    },
  },
  headCells: {
    style: {
      paddingLeft: "4px",
      paddingRight: "4px",
    },
  },
  cells: {
    style: {
      paddingLeft: "4px",
      paddingRight: "4px",
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
  | "reported"
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
  "reported",
  // "comperative",
  // "health",
];

//======================================
//== Support Matrix
//======================================

export type SUPPORT_MATRIX_ROW_TYPE = {
  lc: string;
  lang: string;

  v13_0: string | null;
  v12_0: string | null;
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
  dur_avg: number; // mean duration measured from clips
  dur_med: number; // median duration measured from clips
  dur_std: number; // standart deviation measured from clips
  dur_freq: string | number[]; // frequency distributions of durations
  // voices
  v_avg: number;
  v_med: number;
  v_std: number;
  v_freq: string | number[];
  // sentences
  s_avg: number;
  s_med: number;
  s_std: number;
  s_freq: string | number[];
  // votes
  uv_sum: number;
  uv_avg: number;
  uv_med: number;
  uv_std: number;
  uv_freq: string | number[];
  dv_sum: number;
  dv_avg: number;
  dv_med: number;
  dv_std: number;
  dv_freq: string | number[];
  // demographics
  dem_table: string | number[][];
  dem_uq: string | number[][];
  dem_fix_r: string | number[][];
  dem_fix_v: string | number[][];

  // CALCULATED VALUES (should be here for graph support)
  dem_ctable?: number[][];
  dem_cuq?: number[][];

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
};

// For temporary tables to view algorithm-vs-split data
export type CROSSTAB_ROW_TYPE = {
  alg: string; // algorithm code s1, s99, v1
  train: number; // value for train split
  dev: number; // value for dev split
  test: number; // value for test split
};

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

  c_sum: number;
  c_avg: number;
  c_med: number;
  c_std: number;
  c_freq: string | number[];

  w_sum: number;
  w_avg: number;
  w_med: number;
  w_std: number;
  w_freq: string | number[];

  t_sum: number;
  t_avg: number;
  t_med: number;
  t_std: number;
  t_freq: string | number[];
};

//======================================
//== reported.tsv Statistics
//======================================

export type REPORTED_STATS_ROW_TYPE = {
  ver: string;
  lc: string;
  rep_sum: number;
  rep_sen: number;
  rep_avg: number;
  rep_med: number;
  rep_std: number;
  rep_freq: string | number[];
  rea_freq: string | number[];
};

//======================================
//== SEPARATORS
//======================================
export const SEP_ROW: string = "|";
export const SEP_COL: string = "#";
export const SEP_ALGO: string = "|";

//======================================
//== Frequency Tables
//======================================
export interface IFreqTableProps {
  bins: number[] | string[];
  values: number[] | string[];
  title: string;
  subTitle?: string;
  yScale?: ScaleType;
  mean?: number;
  median?: number;
  std?: number;
  dropLastFromGraph?: boolean;
  addTotals?: boolean;
  addPercentageColumn?: boolean;
  isXNumber?: boolean;
  cnt?: number;
}

export interface IFreqTableRow {
  bin: number | string;
  val: number | string;
  percentage?: number | string;
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

//======================================
//== Measure-Value table
//======================================

export interface IMeasureValueTable {
  measure: string;
  val: string | number;
}

//======================================
//== Methods
//======================================

export const convertStrList = (s: string): number[] => {
  return s === "" ? [] : s.split(SEP_COL).map((x) => Number(x));
};

export const convertStrArr = (s: string): number[][] => {
  return s === "" ? [] : s.split(SEP_ROW).map((s) => convertStrList(s));
};

export const calcListTotal = (lst: number[]): number => {
  return lst.reduce((pv, cv) => pv + cv, 0);
};

export const getArrLastCol = (arr: number[][]): number[] => {
  let res: number[] = [];
  arr.forEach((row) => {
    res.push(row[row.length - 1] as number);
  });
  return res;
};

export const getArrLastRow = (arr: number[][]): number[] => {
  return arr[arr.length - 1];
};

export const getArrTotal = (arr: number[][]): number => {
  const lstRow = getArrLastRow(arr);
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

export const addArrTotals = (
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
  return res;
};

export const expandTable = (arr: number[][]): number[][] => {
  return addArrTotals(addArrTotals(arr, true));
};

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
const convertArrayOfObjectsToCSV = (
  array:
    | DATASET_INFO_ROW_TYPE[]
    | TEXT_CORPUS_STATS_ROW_TYPE[]
    | REPORTED_STATS_ROW_TYPE[]
    | IFreqTableRow[]
    | IMeasureValueTable[],
) => {
  let result: string;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item: any) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
};

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
export const downloadCSV = (
  array:
    | DATASET_INFO_ROW_TYPE[]
    | TEXT_CORPUS_STATS_ROW_TYPE[]
    | REPORTED_STATS_ROW_TYPE[]
    | IFreqTableRow[]
    | IMeasureValueTable[],
  fnBase: string,
  datasetID: string,
) => {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const ext: string = ".csv";
  let fn: string = fnBase + "-" + datasetID;

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", fn + ext);
  link.click();
};
