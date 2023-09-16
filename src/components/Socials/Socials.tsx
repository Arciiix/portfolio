import Link from "next/link";
import { IconType } from "react-icons";

import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
}

function SocialLink({ href, Icon }: SocialLinkProps) {
  return (
    <Link
      className="text-4xl text-white text-opacity-50 hover:text-opacity-100 transition-all"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </Link>
  );
}

export default function Socials() {
  return (
    <div className="flex gap-2">
      <SocialLink Icon={FaGithub} href={"https://github.com/Arciiix"} />
      <SocialLink
        Icon={FaLinkedin}
        href={"https://www.linkedin.com/in/arciiix/"}
      />
    </div>
  );
}
