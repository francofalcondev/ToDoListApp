export const formatToMMDD = (dateInput: Date | string): string => {
  const date = new Date(dateInput);

  // Validar si la fecha es válida
  if (isNaN(date.getTime())) {
    console.error("Fecha inválida:", dateInput);
    return "";
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}/${day}`;
};
