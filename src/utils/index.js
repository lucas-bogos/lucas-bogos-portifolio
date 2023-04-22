export const getYearUpdated = (date) => {
  const yearUpdated = parseInt(date.slice(0, 4));
  return yearUpdated;
}

export const getMonthUpdated = (date) => {
  const monthUpdated = parseInt(date.slice(6, 7));
  return monthUpdated;
}
