import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,  
} from '@remix-run/react';
import './global.module.css';
import { useEffect } from 'react';
import config from '~/config.json';
import AtlasGroteskLC from '~/fonts/AGRegular.woff2';
import OperatorMonoLig from '~/fonts/OperatorMono.woff2';

export const links = () => [  
  {
    rel: 'preload',
    href: OperatorMonoLig,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  {
    rel: 'preload',
    href: AtlasGroteskLC,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
  { rel: 'author', href: '/humans.txt', type: 'text/plain' },
];



export default function App() {

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);
  

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <Meta />
        <Links />
      </head>
      <body> 
            <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

