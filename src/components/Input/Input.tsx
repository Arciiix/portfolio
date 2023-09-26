export interface InputProps {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
  label: string;
  error?: string | null;
}

export default function Input({
  name,
  value,
  onChange,
  label,
  error,
}: InputProps) {
  return (
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className={`peer ${
          error ? "text-red-400 border-red-500" : ""
        } h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 ${
          error ? "focus:border-red-500" : "focus:border-teal-500"
        } focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
        name={name}
        placeholder={" "}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <label
        className={`${
          error ? "text-red-400" : ""
        } after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 ${
          error ? "after:border-red-500" : "after:border-teal-500"
        } after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight ${
          error ? "peer-focus:text-red-500" : "peer-focus:text-teal-500"
        } peer-focus:after:scale-x-100 ${
          error
            ? "peer-focus:after:border-red-500"
            : "peer-focus:after:border-teal-500"
        } peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}
      >
        {label}
      </label>
      <span className="text-red-400">{error}</span>
    </div>
  );
}
