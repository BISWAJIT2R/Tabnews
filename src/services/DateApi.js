export function formatDate() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1; // Months are zero-indexed, so add 1
  const year = now.getFullYear();

  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");

  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

  return formattedDate; // Outputs: "21-05-2024"
}
