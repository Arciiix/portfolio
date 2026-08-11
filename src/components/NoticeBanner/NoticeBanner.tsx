import { FaExclamationTriangle } from "react-icons/fa";

export default function NoticeBanner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="glass-panel mx-auto flex w-full max-w-4xl items-center gap-4 rounded-2xl border-yellow-400/25 px-5 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-300">
        <FaExclamationTriangle className="h-5 w-5" />
      </span>
      <span className="text-left text-sm font-medium leading-relaxed text-yellow-100/90">
        {children}
      </span>
    </div>
  );
}
