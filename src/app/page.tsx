import Loading from "@/pages/Loading/Loading";
import Logo from "@/components/Logo/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Loading /> */}
      test
      <Link href="/test">test</Link>
    </main>
  );
}
