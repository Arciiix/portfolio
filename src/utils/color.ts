export const adjustColor = (color: string, percentage: number): string => {
  // Parse the color string to RGB values
  const hex = color.replace(/^#/, "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Calculate the adjusted RGB values
  const adjustedR = Math.min(255, Math.max(0, r + (percentage / 100) * r));
  const adjustedG = Math.min(255, Math.max(0, g + (percentage / 100) * g));
  const adjustedB = Math.min(255, Math.max(0, b + (percentage / 100) * b));

  // Convert the adjusted RGB values back to a hex color string
  const adjustedColor = `#${(
    (1 << 24) |
    (adjustedR << 16) |
    (adjustedG << 8) |
    adjustedB
  )
    .toString(16)
    .slice(1)}`;

  return adjustedColor;
};
