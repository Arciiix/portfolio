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
}

export default function CodeSnippet({ content }: CodeSnippetProps) {
  return (
    <div className="top-32 z-30 bg-opacity-80 backdrop-blur-lg rounded-md min-w-[384px] w-max max-w-sm xl:max-w-lg py-3 bg-gray-900 p-4 space-y-4 relative">
      <div className="flex justify-between items-center w-max gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="h-full overflow-y-auto">{content}</div>
    </div>
  );
}
