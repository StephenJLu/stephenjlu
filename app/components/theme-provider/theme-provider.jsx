import OperatorMonoLig from '~/fonts/OperatorMono.woff2';
import CedarvilleCursive from '~/fonts/CedarvilleCursive.ttf';
import AtlasGroteskLCThin from '~/fonts/AGThin.ttf';
import AtlasGroteskLCBlack from '~/fonts/AGBlack.ttf';
import AtlasGroteskLCBlackItalic from '~/fonts/AGBlackItalic.ttf';
import AtlasGroteskLCBold from '~/fonts/AGBold.ttf';
import AtlasGroteskLCBoldItalic from '~/fonts/AGBoldItalic.ttf';
import AtlasGroteskLCLight from '~/fonts/AGLight.ttf';
import AtlasGroteskLCLightItalic from '~/fonts/AGLightItalic.ttf';
import AtlasGroteskLCMedium from '~/fonts/AGMedium.ttf';
import AtlasGroteskLCMediumItalic from '~/fonts/AGMediumItalic.ttf';
import AtlasGroteskLCRegular from '~/fonts/AGRegular.ttf';
import AtlasGroteskLCRegularItalic from '~/fonts/AGRegularItalic.ttf';
import AtlasGroteskLCThinItalic from '~/fonts/AGThinItalic.ttf';
import { createContext, useContext } from 'react';
import { classes, media } from '~/utils/style';
import { themes, tokens } from './theme';

export const ThemeContext = createContext({});

export const ThemeProvider = ({
  theme = 'dark',
  children,
  className,
  as: Component = 'div',
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;

  return (
    <ThemeContext.Provider
      value={{
        theme,        
      }}
    >
      {isRootProvider && children}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
       <Component className={classes(className)} data-theme={theme} {...rest}>
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme) {
  return squish(
    Object.keys(theme)
      .map(key => `--${key}: ${theme[key]};`)
      .join('\n\n')
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    style[`--${key}`] = theme[key];
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties() {
  return squish(
    Object.keys(media)
      .map(key => {
        return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
      })
      .join('\n')
  );
}

const layerStyles = squish(`
  @layer theme, base, components, layout;
`);

const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);

const fontStyles = squish(`  

  @font-face {
    font-family: OperatorMonoLig;
    src: url(${OperatorMonoLig}) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: CedarvilleCursive;
    src: url(${CedarvilleCursive}) format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCThin}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCLight}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCRegular}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCMedium}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCBold}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCBlack}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCThinItalic}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCLightItalic}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCRegularItalic}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCMediumItalic}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCBoldItalic}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${AtlasGroteskLCBlackItalic}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: italic;
  }
`);

export const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
