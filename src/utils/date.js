export const getNumberOfDaysToGo = firstDate => {
  const oneDay = 24 * 60 * 60 * 1000;
  const secondDate = new Date();
  const diffDays = Math.round(
    Math.abs((new Date(firstDate) - secondDate) / oneDay)
  );
  return `${diffDays} ${diffDays == 1 ? 'day' : 'days'} to go`;
};

export const defaultDateFormat = ISOdate => {
  const date = new Date(ISOdate);
  return `${date.getDate()} ${date.toLocaleString('default', {
    month: 'short',
  })}, ${date.getFullYear()}`;
};
