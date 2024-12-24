import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { ThemeProvider } from '~/components/theme-provider/theme-provider';
import { themeStyles } from '~/components/theme-provider/theme-provider';
import Rotation from '~/components/bg-rotation/Rotation';
import GTM from '~/components/tag-manager/gtm';
import { MenuBar } from '~/layouts/menu-bar/MenuBar';
import { Footer } from '~/layouts/footer/Footer';
import { useEffect } from 'react';

import AtlasGroteskLC from '~/fonts/AGRegular.ttf';
import OperatorMonoLig from '~/fonts/OperatorMono.woff2';
import config from './config.json';
import styles from './root.module.css';
import './reset.module.css';
import './global.module.css';

export const links = () => [
  {
    rel: 'preload',
    href: OperatorMonoLig,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: AtlasGroteskLC,
    as: 'font',
    type: 'font/ttf',
    crossOrigin: 'anonymous',
  },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
  { rel: 'author', href: '/humans.txt', type: 'text/plain' },
];

export default function App() {
  const theme = 'dark';

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);

  return (
    <html lang="en">
      <head>                        
        <title>Stephen J. Lu | Web Design and Development for the Public Good</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <meta name="color-scheme" content={theme === 'dark' ? 'dark' : 'light'} />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
      </head>      
      <body>
        <Rotation />
        <ThemeProvider theme={theme} className="">
          <MenuBar />
          <main id="main-content" className={styles.container} tabIndex={-1}>
            <Outlet />
            <Footer />
          </main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}