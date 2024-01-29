const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
};

export const getFormattedDate = (targetDateTime: string): string => {
  const currentDate = new Date();
  const targetDate = new Date(targetDateTime);

  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  if (daysDifference === 1) {
    return "Yesterday";
  } else if (daysDifference === 2) {
    return "In 2 days";
  } else {
    return formatDate(targetDate);
  }
};
