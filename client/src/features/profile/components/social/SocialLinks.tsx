import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTiktok, SiX, SiYoutube } from "react-icons/si";
import type { SocialMedia } from "../../types";

interface SocialLinksProps {
  social: SocialMedia;
}

const SocialLinks = ({ social }: SocialLinksProps) => {
  const socialLinks = [
    { key: "youTube", icon: SiYoutube, label: "YouTube", url: social.youTube },
    { key: "twitter", icon: SiX, label: "Twitter", url: social.twitter },
    { key: "facebook", icon: SiFacebook, label: "Facebook", url: social.facebook },
    { key: "linkedIn", icon: SiLinkedin, label: "LinkedIn", url: social.linkedIn },
    { key: "instagram", icon: SiInstagram, label: "Instagram", url: social.instagram },
    { key: "gitHub", icon: SiGithub, label: "GitHub", url: social.gitHub },
    { key: "tikTok", icon: SiTiktok, label: "TikTok", url: social.tikTok },
  ].filter((link) => link.url);

  if (socialLinks.length === 0) return null;

  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map(({ key, icon: Icon, label, url }) => (
          <Tooltip key={key}>
            <TooltipTrigger asChild>
              <a
                href={url!}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {label}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
