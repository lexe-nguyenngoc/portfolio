export const formatDate = (date?: Date | number): string => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric"
  }).format(date);

  return formattedDate;
};
