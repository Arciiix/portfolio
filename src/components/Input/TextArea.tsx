import { InputProps } from "./Input";
import { cn } from "@/lib/utils";

type TextAreaProps = InputProps;

export default function TextArea({
  name,
  value,
  onChange,
  label,
  error,
}: TextAreaProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className={cn(
          "mb-2 block text-sm font-medium",
          error ? "text-red-400" : "text-white/80"
        )}
      >
        {label}
      </label>
      <textarea
        id={name}
        rows={5}
        name={name}
        value={value}
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full resize-y rounded-xl border bg-white/[0.07] px-4 py-3.5 text-base leading-relaxed text-white outline-none transition-all duration-300",
          error
            ? "border-red-500/60 focus:border-red-400 focus:ring-4 focus:ring-red-400/15"
            : "border-white/20 hover:border-white/35 focus:border-teal-400 focus:bg-white/[0.1] focus:ring-4 focus:ring-teal-400/15"
        )}
      />
      <span className="mt-1.5 block min-h-[1.1rem] text-xs text-red-400">
        {error ?? ""}
      </span>
    </div>
  );
}
