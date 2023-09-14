interface BoldedProps {
  text: string;
}

export default function Bolded({ text }: BoldedProps) {
  return <span className="font-bold text-teal-400">{text}</span>;
}
