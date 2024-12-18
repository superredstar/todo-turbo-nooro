export function getContrastColor(hexColor: string): string {
  // Remove the '#' if present
  hexColor = hexColor.replace("#", "");

  // Check if it's a 3-digit or 6-digit hex code
  if (hexColor.length === 3) {
      hexColor = hexColor
          .split("")
          .map((char) => char + char)
          .join("");
  }

  if (hexColor.length !== 6) {
      console.warn("Invalid hex color code:", hexColor);
      return "#000000"; // Default to black
  }

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate relative luminance using WCAG formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine contrast color based on luminance threshold
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}