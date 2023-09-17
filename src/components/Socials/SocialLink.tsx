import Link from "next/link";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
}

export default function SocialLink({ href, Icon }: SocialLinkProps) {
  return (
    <Link
      className="text-5xl text-white text-opacity-50 hover:text-opacity-100 transition-all"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </Link>
  );
}
