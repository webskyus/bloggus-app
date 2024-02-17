export const random = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min)) + min;
};

export const getFormattedDate = (date: Date) => {
  const publishDate = new Date(date);
  const year = publishDate.getFullYear();
  const month = publishDate.toLocaleString('default', { month: 'short' });
  const day = publishDate.getDate();

  return `${day} ${month}, ${year}`
}
