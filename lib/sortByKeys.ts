import { parseDate } from "./parseDate";

const sortBy = (array: any[], key: string) => {
  return array.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }
    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  });
};

const sortByDate = (array: any[]) => {
  return array.sort((a, b) => {
    if (parseDate(a["date"]) > parseDate(b["date"])) {
      return -1;
    }
    if (parseDate(a["date"]) < parseDate(b["date"])) {
      return 1;
    }
    return 0;
  });
};

export const sortByKeys = (array: any[], keys: string[]) => {
  return keys.reduce((acc, key) => {
    return key === "date" ? sortByDate(acc) : sortBy(acc, key);
  }, array);
};
