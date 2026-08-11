// Taken from VS Code, from my theme
export const CODE_COLORS = {
  white: "#a6accd",
  blue: "#82aaff",
  cyan: "#7bddff",
  yellow: "#c4c800",
  green: "#b9db64",
  purple: "#c792ea",
  red: "#f06761",
};

interface CodeSnippetProps {
  content: JSX.Element;
  title?: string;
}

export default function CodeSnippet({
  content,
  title = "skills.ts",
}: CodeSnippetProps) {
  return (
    <div className="w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0f17]/85 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.05] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-xs tracking-wide text-white/45">
          {title}
        </span>
      </div>
      <div className="max-h-64 overflow-y-auto px-5 py-4 text-left md:px-6 md:py-5">
        {content}
      </div>
    </div>
  );
}
