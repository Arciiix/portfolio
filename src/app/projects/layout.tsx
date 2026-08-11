import ColorfulBackground from "@/components/ColorfulBackground/ColorfulBackground";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative py-24">
      <ColorfulBackground customOpacity={0.2} />
      {/* Readability overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#08080f]/55 via-[#08080f]/10 to-[#08080f]/75"
      />
      <div className="relative z-30 m-0 w-full overflow-hidden p-4 sm:p-8">
        <div className="z-40 mx-auto min-h-[calc(100vh-200px)] w-full max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  );
}
