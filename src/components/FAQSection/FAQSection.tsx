import { FaChevronRight } from "react-icons/fa";

interface FAQSectionProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
}

export default function FAQSection({ children, title }: FAQSectionProps) {
  return (
    <section className="glass-panel group relative w-full overflow-hidden rounded-[1.75rem] p-6 md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full opacity-15 blur-3xl"
        style={{ background: "#2dd4bf" }}
      />
      <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-teal-300 md:text-3xl">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-teal-400/30 bg-teal-400/10 text-sm text-teal-300">
          <FaChevronRight />
        </span>
        {title}
      </h2>
      <div className="faq-content">{children}</div>
    </section>
  );
}
