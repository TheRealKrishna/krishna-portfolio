import type { IconType } from "react-icons";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaCode,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const map: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  x: FaXTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  leetcode: SiLeetcode,
};

/** Resolve a social-network key to its react-icon component. */
export function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? FaCode;
  return <Icon className={className} aria-hidden />;
}
