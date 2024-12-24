export const formatDate = (createdAtDate: Date) => {
  if (!(createdAtDate instanceof Date)) {
    throw new Error("El parámetro debe ser una instancia de Date.");
  }

  return createdAtDate
    .toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" })
    .replace("/", "-");
};
