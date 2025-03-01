import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotation } from "rough-notation/lib/model";

type AnimatedUnderlineTitleProps = {
  title: string;
  allowedToShow?: boolean;
  className?: string | null;
};

const teal400 = "#38b2ac";

export default function AnimatedUnderlineTitle({
  title,
  allowedToShow,
  className,
}: AnimatedUnderlineTitleProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [annotation, setAnnotation] = useState<RoughAnnotation | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (ref.current) {
      if (isInView && allowedToShow) {
        const annotation = annotate(ref.current, {
          type: "underline",
          color: teal400,
        });
        annotation.show();
        setAnnotation(annotation);
      } else if (!isInView && annotation) {
        annotation?.hide();
        setAnnotation(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, allowedToShow]);

  return (
    <span
      ref={(r) => (ref.current = r)}
      className={`text-teal-400 font-bold text-6xl ${className ?? ""}`}
    >
      {title}
    </span>
  );
}
