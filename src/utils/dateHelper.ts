export const formatDateHandler = (date: string, locale = "en-US") => {
  return new Date(date).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
