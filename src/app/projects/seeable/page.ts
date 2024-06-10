import { redirect } from "next/navigation";

const SEEABLE_URL =
  process.env.SEEABLE_URL || "https://seeable.vercel.app/?fromPortfolio=true";

export default function Seeable() {
  redirect(SEEABLE_URL);
}
