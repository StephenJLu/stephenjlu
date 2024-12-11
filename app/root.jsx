import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,  
} from '@remix-run/react';
import './global.module.css';

export const links = () => [
  
 // { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
 // { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
 // { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
 // { rel: 'author', href: '/humans.txt', type: 'text/plain' },
];



export default function App() {
  

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />  
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

