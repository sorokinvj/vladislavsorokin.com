export const getColorFromTag = (tag: string): string => {
  switch (tag) {
    case "code":
      return "#ffbd11";
    case "insight":
      return "#48e2fe";
    case "explanation":
      return "#ea7f68";
    default:
      return "black";
  }
};
