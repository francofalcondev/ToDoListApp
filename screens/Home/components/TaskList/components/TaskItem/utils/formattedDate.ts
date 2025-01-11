export const formatDate = (createdAtDate: Date) => {
  if (!(createdAtDate instanceof Date)) {
    throw new Error("The parameter must be an instance of Date.");
  }

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Normalize the dates to remove time
  const normalizeDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const createdDate = normalizeDate(createdAtDate);
  const todayDate = normalizeDate(today);
  const yesterdayDate = normalizeDate(yesterday);

  if (createdDate.getTime() === todayDate.getTime()) {
    return "Today";
  } else if (createdDate.getTime() === yesterdayDate.getTime()) {
    return "Yesterday";
  } else {
    return createdAtDate.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
    });
  }
};
