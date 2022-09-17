export const parseDate = (str: string): Date => {
  // function that takes a string in ISO format and returns a Date object
  // return error if string is not in ISO format
  const date = new Date(str);
  if (isNaN(date.getTime())) {
    throw new Error(
      `Invalid initial date format: ${str}, please pass string in ISO format: YYYY-MM-DD`
    );
  }

  return date;
};
