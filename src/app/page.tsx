import Landing from "@/components/Landing/Landing";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-0 p-0">
      <Landing />

      <div id="content-anchor"></div>
      <PersonalInfo />
    </main>
  );
}
