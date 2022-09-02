export const isWeekday = (date) => {
  if (!date) {
    new Error("Date was not passed");
  }
  const day = date.getDay();
  return day !== 0 && day !== 6;
};