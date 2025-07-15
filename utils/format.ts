export const formatDate = (date: Date | number | string): string => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric"
  }).format(new Date(date));

  return formattedDate;
};
