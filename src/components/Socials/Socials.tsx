import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLink from "./SocialLink";

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
