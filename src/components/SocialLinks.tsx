import socialIcons from "../../assets/socialIcons";

interface SocialLink {
  title: keyof typeof socialIcons;
  href: string;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      title: "Github",
      href: "https://github.com/srinathv31",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/srinathv31",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/srinath-venkatesh/",
    },
  ];

  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:rotate-6 sm:p-1 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block h-6 w-6 scale-125 fill-transparent 
            stroke-current stroke-2 opacity-90 group-hover:stroke-red-500 
            sm:scale-110"
          >
            {socialIcons[link.title]}
          </svg>
        </a>
      ))}
    </>
  );
}
