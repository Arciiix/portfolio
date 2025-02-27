import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLink from "./SocialLink";

type SocialsProps = {
  noGithub?: boolean;
};
export default function Socials({ noGithub }: SocialsProps) {
  return (
    <div className="flex gap-2">
      {!noGithub && (
        <SocialLink Icon={FaGithub} href={"https://github.com/Arciiix"} />
      )}
      <SocialLink
        Icon={FaLinkedin}
        href={"https://www.linkedin.com/in/arciiix/"}
      />
    </div>
  );
}
