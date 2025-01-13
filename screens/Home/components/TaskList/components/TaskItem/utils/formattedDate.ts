export const formatDate = (createdAtDate: Date | undefined) => {
  if (!createdAtDate) {
    return "";
  }

  // Crear una nueva fecha y establecerla al inicio del día
  const date = new Date(createdAtDate);
  date.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  // Si es hoy, retornar string vacío
  if (date.getTime() === today.getTime()) {
    return "";
  }

  if (date.getTime() > today.getTime()) {
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
    });
  }

  if (date.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }

  return date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
  });
};
