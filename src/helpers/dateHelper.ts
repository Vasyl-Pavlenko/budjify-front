export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);
  const [month, day, year] = formattedDate.split(' ');

  return `${day} ${month} ${year}`.replace(',', ' ');
};