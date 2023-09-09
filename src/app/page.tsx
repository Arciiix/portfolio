import Loading from "@/components/Loading/Loading";
import Logo from "@/components/Logo/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Loading />
    </main>
  );
}
