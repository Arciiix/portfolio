import ColorfulBackground from "@/components/ColorfulBackground/ColorfulBackground";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-24 relative">
      <ColorfulBackground customOpacity={0.2} />
      <div className="relative w-full z-30 p-8 m-0 overflow-hidden">
        <div className="z-40 w-full min-h-[calc(100vh-200px)]">{children}</div>
      </div>
    </div>
  );
}
