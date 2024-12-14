import config from '~/config.json';

export const navLinks = [
  {
    label: 'Home',
    pathname: '/#home',
  },
  {
    label: 'About',
    pathname: '/#about',
  },
  {
    label: 'Ledger',
    pathname: 'https://ledger.StephenJLu.com',
  },
  {
    label: 'Projects',
    pathname: '/#projects',
  },
  {
    label: 'Contact',
    pathname: '#contact',
  },
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
