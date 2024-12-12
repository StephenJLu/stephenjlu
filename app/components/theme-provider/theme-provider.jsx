import OperatorMonoLig from '../../fonts/OperatorMono.woff2';
import AtlasGroteskLCThin from '../../fonts/AGThin.woff2';
import AtlasGroteskLCBlack from '../../fonts/AGBlack.woff2';
import AtlasGroteskLCBlackItalic from '../../fonts/AGBlackItalic.woff2';
import AtlasGroteskLCBold from '../../fonts/AGBold.woff2';
import AtlasGroteskLCBoldItalic from '../../fonts/AGBoldItalic.woff2';
import AtlasGroteskLCLight from '../../fonts/AGLight.woff2';
import AtlasGroteskLCLightItalic from '../../fonts/AGLightItalic.woff2';
import AtlasGroteskLCMedium from '../../fonts/AGMedium.woff2';
import AtlasGroteskLCMediumItalic from '../../fonts/AGMediumItalic.woff2';
import AtlasGroteskLCRegular from '../../fonts/AGRegular.woff2';
import AtlasGroteskLCRegularItalic from '../../fonts/AGRegularItalic.woff2';
import AtlasGroteskLCThinItalic from '../../fonts/AGThinItalic.woff2';
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
       <Component className={classes(className)} 
       bs-data-theme={theme} {...rest}>
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
    font-family: "OperatorMonoLig";
    src: url(${OperatorMonoLig}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCThinItalic}) format('woff2');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCLightItalic}) format('woff2');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCRegularItalic}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCMediumItalic}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCBoldItalic}) format('woff2');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${AtlasGroteskLCBlackItalic}) format('woff2');
    font-weight: 900;
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
