import Logo from "../Logo/Logo";

export default function Loading() {
  return (
    <div className="w-screen h-screen fixed left-0 top-0">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Logo withoutFill repeat size={200} />
      </div>
    </div>
  );
}
