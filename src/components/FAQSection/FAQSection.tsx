interface FAQSectionProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
}

export default function FAQSection({ children, title }: FAQSectionProps) {
  return (
    <div className="w-full bg-teal-900 rounded-xl p-3 flex flex-col bg-opacity-20">
      <span className="text-2xl text-teal-400 font-semibold">{title}</span>
      {children}
    </div>
  );
}
