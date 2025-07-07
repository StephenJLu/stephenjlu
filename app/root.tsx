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
        <script
          id="setmore_script"
          type="text/javascript"
          src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
        ></script>
      </head>      
      <body>
        <Rotation />
        <ThemeProvider theme={theme} className="theme-provider">  
          <MenuBar />
          <main id="main-content" className={styles.container} tabIndex={-1}>
            <Outlet />
            <Footer />
          </main>
        </ThemeProvider>
        <a
          style={{
            float: 'none',
            position: 'fixed',
            right: '-2px',
            top: '25%',
            display: 'block',
            zIndex: 20000,
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://stephenjlu.setmore.com"
        >
          <img
            style={{ border: 'none' }}
            src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png"
            alt="Click here to book an appointment with Stephen"
          />
        </a>
        <ScrollRestoration />
        <Scripts />        
      </body>
    </html>
  );
}