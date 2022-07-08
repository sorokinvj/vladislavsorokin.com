export const parseDate = (str: string): Date => {
  // function that takes a string in format "DD-MM-YYYY" and returns a Date object
  const [day, month, year] = str.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
