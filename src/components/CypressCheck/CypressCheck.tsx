"use client";
import { useEffect, useState } from "react";

export default function CypressCheck() {
  const [isCypress, setIsCypress] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Cypress) {
      setIsCypress(true);
    }
  }, []);

  if (!isCypress) return null;

  return (
    <div className="text-red-600 font-bold text-9xl text-center my-12">
      MACIEK NIE TESTUJ TEJ STRONY PROSZE CIE
    </div>
  );
}
