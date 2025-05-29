import { redirect } from "next/navigation";

const SEEABLE_URL =
  process.env.SEEABLE_URL ||
  "https://seeable.zs6sobieski.pl/?fromPortfolio=true";

export default function Seeable() {
  redirect(SEEABLE_URL);
}
