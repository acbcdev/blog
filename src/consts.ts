// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "The Code";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const LINKS = {
  GITHUB: "https://github.com/acbcdev",
  TWITTER: "https://x.com/acbcdotdev",
  PORFOLIO: "https://acbc.dev",
  LINKEDIN: "https://www.linkedin.com/in/acbc-dev/",
} as const;
export const FOOTER = [
  {
    name: "RSS",
    link: "/rss.xml",
  },
  {
    name: "Github",
    link: LINKS.GITHUB,
  },
  {
    name: "Twitter",
    link: LINKS.TWITTER,
  },
  {
    name: "Portfolio",
    link: LINKS.PORFOLIO,
  },
  {
    name: "Linkedin",
    link: LINKS.LINKEDIN,
  },
];
