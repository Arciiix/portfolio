import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <div className="w-full p-2 m-0 fixed bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
      <Logo size={70} />
    </div>
  );
}
