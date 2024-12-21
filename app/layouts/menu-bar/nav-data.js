import config from '~/config.json';

export const navLinks = [
  {
    label: 'Home',
    pathname: '/#home',
  },    
  {
    label: 'Projects',
    pathname: '/#webdev',
  },
  {
    label: 'Ledger',
    pathname: 'https://ledger.StephenJLu.com',
  },
  {
    label: 'About',
    pathname: '/#forensics',
  },
  {
    label: 'Contact',
    pathname: 'https://legacy.stephenjlu.com/contact',
  },
  
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
