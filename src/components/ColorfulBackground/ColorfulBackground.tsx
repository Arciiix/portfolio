interface ColorfulBackgroundProps {
  customOpacity?: number | undefined;
}

export default function ColorfulBackground({
  customOpacity,
}: ColorfulBackgroundProps) {
  return (
    <div
      className={`absolute -z-10 top-0 left-0 w-full min-h-screen h-full overflow-auto bg-gray-700 bg-opacity-80 m-0 bg-fixed pb-4 ${
        customOpacity !== undefined ? "" : "opacity-40"
      }`}
      style={{
        backgroundImage: `radial-gradient(at 47% 33%, #4d1480 0, transparent 59%),
      radial-gradient(at 82% 65%, #116578 0, transparent 55%),
      radial-gradient(at 24% 74%, #0a4957 0, transparent 55%),
      radial-gradient(at 67% 23%, #43114f 0, transparent 55%),
      radial-gradient(at 8% 23%, #1e546e 0, transparent 55%)
      `,
        opacity: customOpacity,
      }}
    ></div>
  );
}
