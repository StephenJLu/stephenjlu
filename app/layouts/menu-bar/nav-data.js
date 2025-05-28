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
    label: '#endALS',
    pathname: '/als',
  },
  {
    label: 'Contact',
    pathname: '/contact',
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
  {
    label: 'Docs',
    url: `https://docs.stephenjlu.com`,
    icon: 'copy',
  },
  {
    label: 'Tic-Tac-Toe',
    url: `https://tictactoe.stephenjlu.com`,
    icon: 'tictactoe',
  },
];
