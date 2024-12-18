import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, Meta, Links, Outlet, ScrollRestoration, Scripts } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import React, { useEffect, useState, forwardRef, memo, useRef, createContext, useContext, useCallback, Fragment } from "react";
import { useReducedMotion, useSpring, AnimatePresence, usePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const Rotation = () => {
  useEffect(() => {
    const applyRotation = () => {
      const randomRotationBefore = Math.floor(Math.random() * 360);
      const randomRotationAfter = Math.floor(Math.random() * 360);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = `
        body::before {
          transform: rotate(${randomRotationBefore}deg);
        }
        body::after {
          transform: rotate(${randomRotationAfter}deg);
        }
      `;
      document.head.appendChild(styleElement);
    };
    applyRotation();
  }, []);
  return null;
};
const Rotation$1 = Rotation;
const TextAnim = ({ typeText, delay: delay2 = 0 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => prev < typeText.length ? prev + 1 : prev);
      }, 50);
      return () => clearInterval(interval);
    }, delay2);
    return () => clearTimeout(timer);
  }, [typeText, delay2]);
  return /* @__PURE__ */ jsx("span", { children: typeText.slice(0, count) });
};
const TextAnim$1 = TextAnim;
const TextFade = ({ fadeText, delay: delay2 = 0 }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay2);
    return () => clearTimeout(timer);
  }, [delay2]);
  return /* @__PURE__ */ jsx("span", { style: { opacity: visible ? 1 : 0, transition: "opacity 1s" }, children: fadeText });
};
const TextFade$1 = TextFade;
const delay$2 = async function(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const hidden$1 = "_hidden_1jyky_4";
const styles$n = {
  hidden: hidden$1
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$n.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
VisuallyHidden.displayName = "VisuallyHidden";
const text$4 = "_text_10c22_3";
const glyph = "_glyph_10c22_10";
const value = "_value_10c22_17";
const styles$m = {
  text: text$4,
  glyph,
  value
};
const glyphs = [
  "0",
  "1"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef(null);
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      let animation;
      const renderOutput = () => {
        const characterMap = output.current.map((item) => {
          return `<span class="${styles$m[item.type]}">${item.value}</span>`;
        });
        if (containerInstance) {
          containerInstance.innerHTML = characterMap.join("");
        }
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay$2(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$m.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$m.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$m.content, ref: container2 })
    ] });
  }
);
DecoderText.displayName = "DecoderText";
const InViewport = ({ children }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry2]) => {
        setIsInViewport(entry2.isIntersecting);
      },
      {
        root: null,
        // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1
        // Trigger when 10% of the element is visible
      }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  const childElement = children(isInViewport);
  return React.cloneElement(childElement, { ref: elementRef });
};
const InViewport$1 = InViewport;
const menuButton$1 = "_menuButton_maxbw_3";
const active$1 = "_active_maxbw_13";
const bounce$1 = "_bounce_maxbw_1";
const styles$l = {
  menuButton: menuButton$1,
  active: active$1,
  bounce: bounce$1
};
const MenuButton = ({ item, isActive, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: handleClick,
      className: `${styles$l.menuButton} ${isActive ? styles$l.active : ""}`,
      children: item.label
    }
  );
};
const MenuButton$1 = MenuButton;
const OperatorMonoLig = "/assets/OperatorMono-D7WvIKEd.woff2";
const AtlasGroteskLCThin = "/assets/AGThin-BV3b-dHU.ttf";
const AtlasGroteskLCBlack = "/assets/AGBlack-CTa2XGQt.ttf";
const AtlasGroteskLCBlackItalic = "/assets/AGBlackItalic-sul5g3oJ.ttf";
const AtlasGroteskLCBold = "/assets/AGBold-x0qq96lT.ttf";
const AtlasGroteskLCBoldItalic = "/assets/AGBoldItalic-FSwS18fN.ttf";
const AtlasGroteskLCLight = "/assets/AGLight-C7oQdQYa.ttf";
const AtlasGroteskLCLightItalic = "/assets/AGLightItalic-Bx04CrxG.ttf";
const AtlasGroteskLCMedium = "/assets/AGMedium-7qHP5tWb.ttf";
const AtlasGroteskLCMediumItalic = "/assets/AGMediumItalic-CM3QocvE.ttf";
const AtlasGroteskLC = "/assets/AGRegular-B1D8PH8b.ttf";
const AtlasGroteskLCRegularItalic = "/assets/AGRegularItalic-BUXI5k5L.ttf";
const AtlasGroteskLCThinItalic = "/assets/AGThinItalic-D3U6Kc1h.ttf";
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `AtlasGroteskLC, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  fontWeightThin: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontWeightBlack: 900,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(0% 0 0)",
  backgroundLight: "oklch(20% 0 0)",
  primary: "oklch(95% 0 0)",
  accent: "oklch(89.7% 0.14 83.6)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  linkColor: "var(--accent)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(18.3% 0.1 264.6)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  linkColor: "var(--accent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
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
    src: url(${AtlasGroteskLC}) format('truetype');
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
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const icon$2 = "_icon_1tdl1_2";
const styles$k = {
  icon: icon$2
};
const sprites = "/assets/icons-Ghr-oXj8.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$k.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$4 = "_button_4rqg0_3";
const text$3 = "_text_4rqg0_265";
const loader$1 = "_loader_4rqg0_291";
const icon$1 = "_icon_4rqg0_317";
const styles$j = {
  button: button$4,
  text: text$3,
  loader: loader$1,
  icon: icon$1
};
function isExternalLink(href) {
  return (href == null ? void 0 : href.includes("://")) ?? false;
}
const Button = forwardRef(
  ({ href, ...rest }, ref) => {
    if (isExternalLink(href) || !href) {
      return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
    }
    return /* @__PURE__ */ jsx(
      ButtonContent,
      {
        unstable_viewTransition: true,
        as: Link$1,
        prefetch: "intent",
        to: href,
        ref,
        ...rest
      }
    );
  }
);
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$j.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || (isExternal ? "noopener noreferrer" : void 0),
        target: target || (isExternal ? "_blank" : void 0),
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$j.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$j.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$j.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$j.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const loader = "_loader_1o1zt_2";
const text$2 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const loaderSpan = "_loaderSpan_1o1zt_1";
const styles$i = {
  loader,
  text: text$2,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$i.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$i.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$i.span })
      }
    );
  }
);
const b = "_b_6k8yy_2";
const c = "_c_6k8yy_6";
const styles$h = {
  b,
  c
};
const Monogram = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      id: "a",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "50",
      height: "50",
      viewBox: "0 0 50 50",
      children: [
        /* @__PURE__ */ jsx("path", { className: styles$h.c, d: "M0,0v50h50V0H0ZM48.38,47.96H1.62V2.04h46.75v45.92Z" }),
        /* @__PURE__ */ jsx("path", { className: styles$h.b, d: "M31.5,34.71c.11-.03.13-.07.21-.12v-.04h.08v-.04h.08v-.04h.17v-.04c.13-.04.46.06.54.08.19.05.38-.07.54-.08l.21-.25h.04v-.08l.08-.04v-.12h.04v-.12h.04v-.21h.04v-.33h.04v-3.04c.07-.27.04-.71.04-1.04v-4.21h-.04v-.17c-.01-.49.07-1.13-.04-1.54v-.67c0-.5,0-1.07-.04-1.5l.04-3.08c.07-.26.09-1.42,0-1.67-.05.05-.02,0-.04.08h-.04l-.04.25c-.2.53-.08,1.2-.08,1.83l-.04,3.83v.17h.04v1.62c-.11.38-.04,1-.04,1.46l-.04,2c.09.33.09,1.67,0,2l-.04.62-.29,1.04h-.04v.08h-.04v.12h-.04l-.08.25h-.04v.08h-.04v.08h-.04v.08h-.04l-.08.25-.08.04-.04.17-.12.08v.08l-.08.04v.08l-.12.08v.08l-.12.08v.08l-.33.29v.08l-.29.25-.04.08h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.08.12h-.08l-.04.08-.12.04v.04h-.08l-.04.08-.17.04-.04.08-.17.04-.04.08-.25.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04h-.12v.04h-.08v.04l-.25.04v.04h-.12v.04h-.12v.04h-.12v.04l-.33.04v.04h-.17v.04h-.17v.04h-.17v.04h-.25v.04h-.25v.04h-.37v.04h-.75v.04l-.83-.04v-.04h-.42v-.04l-.83-.08v-.04h-.21v-.04l-.37-.04v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04h-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.08-.12h-.08l-.04-.08h-.08l-.08-.12h-.08l-.12-.17-.33-.29-.04-.12-.29-.25v-.04h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.04.08-.12.04v.04h-.08l-.04.08h-.08l-.04.08-.17.04-.04.08h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04l-.25.04v.04h-.08v.04h-.17v.04h-.12v.04h-.12v.04h-.12v.04h-.17v.04h-.17v.04h-.17v.04h-.17v.04h-.21v.04l-.42.04v.04h-.25v.04h-.29v.04h-.33v.04h-.37v.04h-.5v.04h-1.12v.04l-.87-.04v-.04h-.42v-.04h-.29c-.21-.06-.51-.1-.71-.17h-.21c-.22-.07-.5-.14-.71-.21h-.17v-.04h-.12v-.04h-.12v-.04l-.54-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.37-.12-.04-.08-.17-.04c-.43-.27-.61-.77-1.29-.79-.03.05-.07.06-.08.08v.08h-.04l-.04.37h-.04l-.04.62h-.04l-.08.25-.25.21s-.03.06-.04.08c-.07.05-.09,0-.17.08l-.42.04c-.07-.08-.1-.04-.17-.08l-.12-.17h-.04c-.23-.34-.3-1.48-.17-1.96v-.42h.04v-.33h.04v-.37h.04v-.37h.04v-.37h.04v-.5h.04v-.29h-.04v-.54l-.04-1.08h-.04l-.08-1.54h-.04v-.5h-.04v-.54c-.09-.31-.07-1.04.04-1.29l.25-.33h.08l.04-.08c.08-.05.09,0,.17-.08.29,0,.42.04.62.08l.21.25h.04v.08h.04l.04.17h.04l.04.46h.04v.54c0,.46-.02.99.08,1.33v.21h.04v.12h.04v.17h.04v.08h.04l.04.25h.04v.08h.04v.12h.04l.08.25h.04v.08h.04v.12h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.17h.04v.12h.04l.04.17h.04v.12h.04v.08h.04l.04.17h.04l.12.37.08.04.08.25.08.04v.08l.12.08v.08l.12.08v.08l.12.08v.08l.21.17v.08l.29.25v.08l.37.33.12.17h.08l.12.17h.08l.12.17h.08l.04.08h.08l.04.08.17.04.04.08h.08v.04h.08v.04c.43.19.9.28,1.37.42h.33c.31.09,1.52.09,1.83,0h.37c.25-.07.59-.09.83-.17h.21v-.04h.17v-.04h.17v-.04h.17v-.04h.17v-.04h.12v-.04h.12v-.04h.12v-.04h.08v-.04l.25-.04v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08v-.04h.12v-.04h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04.04-.08h.08l.04-.08h.08l.08-.12h.08l.12-.17h.08l.42-.46c.14-.14.35-.3.37-.54h-.04l-.04-.25h-.04v-.12h-.04v-.12c-.17-.43-.25-.94-.25-1.54l-.04-.5h.04l.04-.33h.04l.08-.25h.04v-.08h.04v-.08l.46-.5h.08l.04-.08h.08v-.04c.12-.07.07.04.12-.12h-.04l-.04-.25h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08l-.08-.04-.04-.17-.17-.12v-.08l-.21-.17-.37-.42h-.08l-.12-.17h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08-.21-.04v-.04h-.08v-.04l-.25-.08v-.04h-.12v-.04h-.08v-.04l-.21-.04v-.04h-.12v-.04h-.08v-.04l-.25-.04v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.21v-.04l-.42-.04v-.04l-.46-.04v-.04h-.33v-.04h-.29v-.04h-.29v-.04h-.29c-.27-.08-.62-.13-.87-.21h-.21v-.04l-.29-.04v-.04l-.29-.04v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04l-.25-.04v-.04l-.25-.08v-.04l-.25-.08-.04-.08h-.08l-.04-.08h-.08l-.08-.12h-.08l-.08-.12h-.08l-.12-.17h-.08l-.29-.33-.12-.08v-.08l-.25-.21v-.08l-.12-.08v-.08l-.08-.04v-.08l-.08-.04v-.08l-.08-.04-.08-.25h-.04v-.08h-.04v-.08h-.04l-.08-.25h-.04l-.29-1.04v-.33c-.15-.55.01-1.32.17-1.71v-.12h.04v-.08h.04v-.12h.04l.04-.17h.04l.04-.17.08-.04.04-.17.08-.04v-.08l.12-.08v-.08l.17-.12v-.08l.29-.25.17-.21h.08l.12-.17h.08l.08-.12.12-.04.04-.08h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04v-.04l.17-.04v-.04h.12v-.04h.08v-.04l.21-.04v-.04l.25-.04v-.04h.08v-.04l1.17-.25h.46c.13-.04.64-.1.83-.04v.04h.33v.04h.25v.04h.25v.04l.33.04v.04h.12v.04h.12v.04h.12v.04h.12v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04h.08v.04l.67.29v.04h.08v.04l.25.08v.04l.25.04v.04h.58v-.04c.25-.11.4-.28.58-.46l.08-.12c.22-.16.49-.21.87-.21v.04h.12l.04.08h.08l.21.29v.12h.04v.12h.04v.21h.04v.37h.04v.5h.04l.04.46h.04l.04.29h.04v.08h.04v.12h.04v.12h.04v.12h.04l.04.25h.04v.08h.04l.04.25h.04v.08h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04l.12.58h.04v.21c.03.08.09.35.04.5h-.04l-.04.21c-.09.05-.09.09-.21.12-.19.18-.59.05-.75-.04h-.08l-.46-.5-.04-.17-.08-.04-.04-.17h-.04l-.04-.12-.08-.04-.04-.17h-.04l-.04-.12-.08-.04v-.08l-.12-.08v-.08l-.42-.37-.04-.12h-.08l-.33-.37-.17-.12v-.08l-.33-.29-.04-.12-.12-.08-.25-.29h-.08l-.12-.17h-.08l-.08-.12h-.08l-.08-.12h-.08v-.04h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04l-.17-.04v-.04h-.12v-.04l-.17-.04v-.04l-.21-.04v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.21v-.04h-.25v-.04l-1.17-.04c-1.17,0-1.96.21-2.54.79l-.17.12v.08l-.08.04-.04.12h-.04v.08h-.04v.08h-.04v.12h-.04v.12c-.15.4-.16.82,0,1.21v.12h.04v.08l.08.04v.08l.08.04.21.25h.08l.08.12.17.04v.04l.25.08v.04h.12v.04h.12v.04h.12v.04h.17v.04h.17v.04h.29v.04h.37v.04h.87v.04h.37v.04h.29c.32.1.73.14,1.04.25l.33.04v.04h.12v.04h.12v.04l.42.08v.04h.08v.04l.25.04v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04l.25.08.04.08.25.08.04.08.25.08v.04l.12.04.04.08.17.04.04.08h.08v.04l.12.04.04.08h.08v.04l.12.04.04.08h.08l.08.12h.08l.04.08h.08l.08.12h.08l.04.08h.04l.04.08h.08l.12.17h.08l.21.25h.08l.37.42.46.42v.08l.21.17v.08l.12.08v.08l.12.08v.08l.12.08v.08l.08.04v.08l.08.04.08.25.08.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.25c.41.95.52,2.25.46,3.54l-.08.62h-.04l-.04.37h-.04l-.04.29h-.04l-.04.25h-.04v.08h-.04v.12h-.04l-.04.21h-.04v.08h-.04v.08h-.04v.08h-.04v.08h-.04v.08l-.08.04-.04.17h-.04v.04h.04l.21.25h.08l.25.29h.08l.12.17h.08l.08.12h.08l.08.12h.08l.04.08h.08l.04.08.17.04.04.08.25.08v.04h.08v.04h.08v.04l.25.08v.04l.25.04v.04h.12v.04h.12v.04h.12v.04h.12v.04h.21v.04h.21v.04h.25v.04h.42v.04h.42c.36,0,.84.04,1.12-.04h.29v-.04h.21v-.04h.17v-.04h.12v-.04h.17c1.81-.71,3.05-2.01,3.71-3.87l.08-.54v-.33c.07-.24.04-.65.04-.96v-1.75l.04-4.83h.04v-.62c.09-.32.04-.85.04-1.25v-2.58l-.04-1.25h-.04v-.12l-.08-.04v-.08l-.17-.12-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08c-.1-.06-.22-.04-.33-.08v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12c-.14-.06-.24-.15-.33-.25l-.08-.04v-.25l.12-.08v-.04h.08l.04-.08.25-.04v-.04c.24-.08,1.04.04,1.21.08h.42c.21.06.59-.03.83.04.07.02.29.09.42.04v-.04h.08v-.04l.29-.04v-.04c.06-.01.37.07.42.08l2,.04c.1-.03.44-.12.58-.08.19.05.59.16.87.08v-.04h1c.25-.07.66.03.92-.04v-.04h.33v.04h.33v.04l.25.04.12.17h.04c.06.09.04.24.04.37-.08.07-.03.1-.08.17l-.29.25-.04.08-.25.08v.04h-.12c-.46.18-1.33.13-1.46.62-.2.18-.12.79-.12,1.17l-.04,2.96v2.21c.07.27.04.71.04,1.04l.04,1.29v2.46h.04v1h.04v.62c0,.5.03,1.11-.04,1.54v1.12c0,1.11,0,2.29.75,2.62.54.24,1.49-.03,2.17.08.45.07,1.07.04,1.58.04.29,0,.66.02.88-.04l.54-.04v-.04h.17v-.04h.12v-.04h.12v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08l.04-.08.17-.04.04-.08h.08l.08-.12h.08l.08-.12h.08l.17-.21h.08l.17-.21h.08l.29-.33.12-.08v-.08l.5-.46c.36-.36.58-.74,1.29-.75.14.15.28.07.29.37.12.13-.04.59-.08.71l-.04.29h-.04v.12h-.04v.12h-.04v.12h-.04v.12h-.04l-.04.25h-.04v.08h-.04l-.04.25h-.04v.08h-.04l-.08.42-.42.92-.08.04v.08l-.29.25-.04.08-.25.08v.04h-.12v.04l-.96-.04v.04c-.47.13-1.01.04-1.58.04-1.19-.04-2.39-.08-3.58-.12v-.04h-1.46v.04c-.23.06-.59-.01-.79.04h-.75v.04h-1c-.06.02.02.03-.04.04h-1v.04c-.23.06-.84-.04-1-.08h-.33v-.04h-.33c-.32-.09-.72-.16-.87-.42-.09-.08-.09-.24-.08-.42.07-.05.14-.15.17-.25Z" })
      ]
    }
  );
};
const section = "_section_cvvm4_2";
const styles$g = {
  section
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$g.section, className), ref, ...rest, children })
);
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_4szht_2";
const container$1 = "_container_4szht_42";
const elementWrapper = "_elementWrapper_4szht_49";
const placeholder = "_placeholder_4szht_71";
const element = "_element_4szht_49";
const button$3 = "_button_4szht_104";
const styles$f = {
  image: image$3,
  container: container$1,
  elementWrapper,
  placeholder,
  element,
  button: button$3
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const containerRef = useRef(null);
  const src = baseSrc || (srcSet ? srcSet.split(" ")[0] : "");
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$f.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2 = 0,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState(void 0);
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef(null);
  const videoRef = useRef(null);
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      var _a;
      setPlaying(true);
      (_a = videoRef.current) == null ? void 0 : _a.play();
    };
    const pauseVideo = () => {
      var _a;
      setPlaying(false);
      (_a = videoRef.current) == null ? void 0 : _a.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    var _a, _b;
    event.preventDefault();
    setVideoInteracted(true);
    if ((_a = videoRef.current) == null ? void 0 : _a.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      (_b = videoRef.current) == null ? void 0 : _b.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$f.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$f.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$f.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$f.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$f.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const polaroid$1 = "_polaroid_1g7nq_1";
const image$2 = "_image_1g7nq_11";
const frame = "_frame_1g7nq_22";
const styles$e = {
  polaroid: polaroid$1,
  image: image$2,
  frame
};
const polaroidFrame = "/assets/polaroid-QWl6TdX0.png";
const PolaroidImage = ({
  imageUrl,
  rotation = 0
}) => {
  return /* @__PURE__ */ jsxs("div", { className: styles$e.polaroid, style: { transform: `rotate(${rotation}deg)` }, children: [
    /* @__PURE__ */ jsx("div", { className: styles$e.image, style: { backgroundImage: `url(${imageUrl})` } }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: styles$e.frame,
        style: { backgroundImage: `url(${polaroidFrame})` }
      }
    )
  ] });
};
const PolaroidImage$1 = PolaroidImage;
const heading = "_heading_hhgbc_2";
const styles$d = {
  heading
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$d.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const divider = "_divider_t8fsy_2";
const line = "_line_t8fsy_8";
const notch = "_notch_t8fsy_30";
const styles$c = {
  divider,
  line,
  notch
};
const Divider = ({
  lineWidth = "100%",
  lineHeight = "2px",
  notchWidth = "90px",
  notchHeight = "10px",
  collapseDelay = 0,
  collapsed = false,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$c.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$c.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$c.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
const link = "_link_10hh2_2";
const styles$b = {
  link
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$b.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const text$1 = "_text_13dm1_2";
const styles$a = {
  text: text$1
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$a.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const toggle = "_toggle_c9w0l_2";
const inner = "_inner_c9w0l_17";
const icon = "_icon_c9w0l_25";
const styles$9 = {
  toggle,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$9.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$9.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$9.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$9.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const name$1 = "Stephen J. Lu";
const title$3 = "Stephen J. Lu | Web Design and Development for the Public Good";
const roles = [
  "Author of CSI to CEO",
  "Web Design and Development",
  "for the Public Good",
  "EMBA | SHRM-CP | Phi Beta Kappa"
];
const url$1 = "https://www.stephenjlu.com";
const bluesky$1 = "stephenjlu.com";
const linkedin = "StephenJLu";
const github = "StephenJLu";
const repo = "https://github.com/StephenJLu/Stephenjlu/";
const ascii = " _________________       \n(  ____ \\__    _( \\      \n| (    \\/  )  ( | (      \n| (_____   |  | | |      \n(_____  )  |  | | |      \n      ) |  |  | | |      \n/\\____) |\\_)  ) | (____/\\\n\\_______(____/  (_______/\n";
const delay$1 = 500;
const avatar = "https://legacy.stephenjlu.com/images/steve.jpg";
const config = {
  name: name$1,
  title: title$3,
  roles,
  url: url$1,
  bluesky: bluesky$1,
  linkedin,
  github,
  repo,
  ascii,
  delay: delay$1,
  avatar
};
const navLinks = [
  {
    label: "Home",
    pathname: "/#home"
  },
  {
    label: "Projects",
    pathname: "/#web-dev"
  },
  {
    label: "Ledger",
    pathname: "https://ledger.StephenJLu.com"
  },
  {
    label: "About",
    pathname: "/#about"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks = [
  {
    label: "Bluesky",
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: "bluesky"
  },
  {
    label: "LinkedIn",
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: "linkedin"
  },
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  }
];
const menuBarContainer = "_menuBarContainer_1wkue_3";
const menuBarList = "_menuBarList_1wkue_29";
const menuButton = "_menuButton_1wkue_39";
const active = "_active_1wkue_39";
const bounce = "_bounce_1wkue_1";
const navbar = "_navbar_1wkue_72";
const logo = "_logo_1wkue_97";
const nav = "_nav_1wkue_72";
const navIcons = "_navIcons_1wkue_115";
const navIconLink = "_navIconLink_1wkue_140";
const navIcon = "_navIcon_1wkue_115";
const mobileNav = "_mobileNav_1wkue_161";
const mobileNavLink = "_mobileNavLink_1wkue_191";
const styles$8 = {
  menuBarContainer,
  menuBarList,
  menuButton,
  active,
  bounce,
  navbar,
  logo,
  nav,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const MenuBar = () => {
  const [activeItem, setActiveItem] = useState();
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const location = useLocation();
  const headerRef = useRef();
  const scrollToHash = useScrollToHash();
  const backgroundColor = themes.dark.background;
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/")
      return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event, item) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    setActiveItem(item.label);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event, item) => {
    handleNavItemClick(event, item);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$8.navbar, ref: headerRef, "data-theme": "dark", children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#home" : "/",
        "data-navbar-item": true,
        className: styles$8.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: (event) => handleMobileNavClick(event, { label: "Home", pathname: "/" }),
        children: /* @__PURE__ */ jsx(Monogram, {})
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$8.nav, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$8.menuBarContainer,
          style: { backgroundColor },
          children: /* @__PURE__ */ jsx("ul", { className: styles$8.menuBarList, children: navLinks.map((item, index2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link$1,
            {
              unstable_viewTransition: true,
              prefetch: "intent",
              to: item.pathname,
              "data-navbar-item": true,
              className: styles$8.navLink,
              "aria-current": getCurrent(item.pathname),
              onClick: (event) => handleNavItemClick(event, item),
              children: /* @__PURE__ */ jsx(
                MenuButton$1,
                {
                  item,
                  isActive: activeItem === item.label,
                  onClick: () => setActiveItem(item.label)
                }
              )
            },
            item.label
          ) }, index2)) })
        }
      ),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$8.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map((item, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: item.pathname,
          className: styles$8.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(item.pathname),
          onClick: (event) => handleMobileNavClick(event, item),
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: item.label
        },
        item.label
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {})
    ] }) })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$8.navIcons, children: socialLinks.map(({ label, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$8.navIconLink,
    "aria-label": label,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$8.navIcon, icon: icon2 })
  },
  label
)) });
const header = "_header_uc7y7_7";
const headerBackground = "_headerBackground_uc7y7_33";
const hidden = "_hidden_uc7y7_65";
const subtitle = "_subtitle_uc7y7_73";
const text = "_text_uc7y7_145";
const styles$7 = {
  header,
  headerBackground,
  hidden,
  subtitle,
  text
};
const Header = () => {
  const fadeText = config.name;
  const roles2 = config.roles;
  const baseDelay = config.delay;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { ref, inView: inView2 } = useInView({
    threshold: 0.5
  });
  useEffect(() => {
    if (currentRoleIndex < roles2.length) {
      const role = roles2[currentRoleIndex];
      const calculatedDelay = role.length * 75;
      const timer = setTimeout(() => {
        setCurrentRoleIndex(currentRoleIndex + 1);
      }, calculatedDelay);
      return () => clearTimeout(timer);
    }
  }, [currentRoleIndex, roles2]);
  return /* @__PURE__ */ jsx("header", { ref, children: /* @__PURE__ */ jsxs("div", { className: styles$7.header, children: [
    /* @__PURE__ */ jsx("div", { className: `${styles$7.headerBackground} ${!inView2 ? styles$7.hidden : ""}` }),
    /* @__PURE__ */ jsx("h1", { children: /* @__PURE__ */ jsx(TextFade$1, { fadeText, delay: baseDelay }) }),
    /* @__PURE__ */ jsx("span", { className: styles$7.subtitle, children: roles2.slice(0, currentRoleIndex + 1).map((role, index2) => {
      const calculatedDelay = role.length * 75;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(DecoderText, { text: role, delay: calculatedDelay }),
        /* @__PURE__ */ jsx("br", {})
      ] }, index2);
    }) })
  ] }) });
};
const footer = "_footer_lr3zr_4";
const footerContent = "_footerContent_lr3zr_28";
const styles$6 = {
  footer,
  footerContent
};
const delay = config.delay;
const Footer = () => {
  return /* @__PURE__ */ jsxs("div", { "data-theme": "dark", children: [
    /* @__PURE__ */ jsx(InViewport$1, { children: (isInViewport) => /* @__PURE__ */ jsx("div", { className: styles$6.footer, children: isInViewport && /* @__PURE__ */ jsx("div", { className: styles$6.footerContent, children: /* @__PURE__ */ jsx("span", { className: styles$6.date, children: /* @__PURE__ */ jsx(
      TextAnim$1,
      {
        typeText: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}. All rights reserved.`,
        delay
      }
    ) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: styles$6.footer, children: /* @__PURE__ */ jsxs("p", { children: [
      "Hand-crafted design by ",
      /* @__PURE__ */ jsx("a", { href: "humans.txt", children: "humans" }),
      "."
    ] }) })
  ] });
};
const container = "_container_2gyay_2";
const skip = "_skip_2gyay_12";
const styles$5 = {
  container,
  skip
};
const reset_module = {};
const global_module = {};
const links = () => [
  {
    rel: "preload",
    href: OperatorMonoLig,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: AtlasGroteskLC,
    as: "font",
    type: "font/ttf",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
function App() {
  const theme = "dark";
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("title", { children: "Stephen J. Lu | Web Design and Development for the Public Good" }),
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#000" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Rotation$1, {}),
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, className: "", children: [
        /* @__PURE__ */ jsx(MenuBar, {}),
        /* @__PURE__ */ jsxs("main", { id: "main-content", className: styles$5.container, tabIndex: -1, children: [
          /* @__PURE__ */ jsx(Outlet, {}),
          /* @__PURE__ */ jsx(Footer, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const { name, url, bluesky } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1020" },
    { property: "og:image:height", content: "532" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: bluesky },
    { property: "twitter:image", content: ogImage }
  ];
}
const page$1 = "_page_10yvh_1";
const contact = "_contact_10yvh_3";
const notInView = "_notInView_10yvh_8";
const inView = "_inView_10yvh_14";
const styles$4 = {
  page: page$1,
  contact,
  notInView,
  inView
};
const meta = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you’re interested in discussing a project or if you just want to say hi"
  });
};
const Contact = ({ id, sectionRef, scrollIndicatorHidden, ...rest }) => {
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx("div", { className: styles$4.page, "data-theme": "dark", children: /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$4.contact,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(InViewport$1, { children: (isInViewport) => {
        if (isInViewport && !hasEnteredViewport) {
          setHasEnteredViewport(true);
        }
        return /* @__PURE__ */ jsxs("div", { className: hasEnteredViewport ? styles$4.inView : styles$4.notInView, children: [
          /* @__PURE__ */ jsx(Heading, { level: 1, as: "span", weight: "light", align: "start", className: styles$4.heading, children: "Contact Me" }),
          /* @__PURE__ */ jsx(Heading, { level: 2, as: "h2", children: "This new website is still under construction." }),
          /* @__PURE__ */ jsxs(Text, { as: "p", children: [
            "I'm currently converting my legacy website to a new, modern, and responsive design, based on ",
            /* @__PURE__ */ jsx(Link, { href: "https://react.dev/", children: "React" }),
            ". I know it's probably overkill for a personal website/portfolio, but I learn best by screwing up. Some things might look screwy on your browser or mobile right now. I'm working on it. You can check out the ",
            /* @__PURE__ */ jsx(Link, { href: "https://storybook.stephenjlu.com/", children: "Storybook" }),
            " to see the component designs.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "In the meantime, you can find me at my ",
            /* @__PURE__ */ jsx(Link, { href: "https://legacy.StephenJLu.com/", children: "legacy website" }),
            " or on ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.linkedin.com/in/stephenjlu/", children: "LinkedIn" }),
            "."
          ] })
        ] });
      } })
    }
  ) });
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const page = "_page_dcraf_2";
const styles$3 = {
  page
};
const home = "_home_1wtwl_1";
const title$2 = "_title_1wtwl_34";
const description$2 = "_description_1wtwl_45";
const tag$1 = "_tag_1wtwl_55";
const tagText$1 = "_tagText_1wtwl_68";
const image$1 = "_image_1wtwl_89";
const svg$2 = "_svg_1wtwl_94";
const button$2 = "_button_1wtwl_110";
const polaroidContainer = "_polaroidContainer_1wtwl_120";
const styles$2 = {
  home,
  title: title$2,
  description: description$2,
  tag: tag$1,
  tagText: tagText$1,
  image: image$1,
  svg: svg$2,
  button: button$2,
  polaroidContainer
};
const steveImage = "/assets/steve-Cy0wBmUI.jpg";
const HomeText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$2.title, "data-visible": visible, level: 3, weight: "light", id: titleId, children: "Hello there" }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "I'm a retired Crime Scene Investigator and Forensic Firearms Examiner-turned-front-end web designer and developer. Throughout my varied careers, I've studied everything from mosquitoes and disease biology to bloodstain patterns, bullet trajectories, and digging up clandestine graves. I've also worked as a freelance web designer, providing services to non-profit organizations and small businesses." }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "I'm currently working on this portfolio website, so please check back soon for updates and changes." }),
  /* @__PURE__ */ jsxs(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: [
    "In the meantime, you can find more detailed information about me at my ",
    /* @__PURE__ */ jsx(Link, { href: "https://legacy.StephenJLu.com/", children: "legacy website" }),
    " or on ",
    /* @__PURE__ */ jsx(Link, { href: "https://www.linkedin.com/in/stephenjlu/", children: "LinkedIn" }),
    "."
  ] }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", style: { fontStyle: "italic" }, children: "Thanks for visiting!" })
] });
const Home = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;
  const rotation = Math.floor(Math.random() * 41) - 20;
  useEffect(() => {
    if (isInViewport) {
      return;
    }
    return () => {
    };
  }, [isInViewport]);
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$2.home,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, unmount: false, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$2.tag, "aria-hidden": true, children: [
          /* @__PURE__ */ jsx(
            Divider,
            {
              notchWidth: "64px",
              notchHeight: "8px",
              collapsed: !visible2,
              collapseDelay: 1e3
            }
          ),
          /* @__PURE__ */ jsx(InViewport$1, { children: (inViewport) => {
            useEffect(() => {
              if (inViewport) {
                setIsInViewport(true);
              }
            }, [inViewport]);
            return /* @__PURE__ */ jsx("div", { className: styles$2.tagText, "data-visible": visible2, children: isInViewport && /* @__PURE__ */ jsx(
              DecoderText,
              {
                text: `${config.name}`,
                delay: 1500
              }
            ) });
          } })
        ] }),
        /* @__PURE__ */ jsx(HomeText, { visible: visible2, titleId }),
        /* @__PURE__ */ jsx("div", { className: styles$2.polaroidContainer, children: /* @__PURE__ */ jsx(PolaroidImage$1, { rotation, imageUrl: steveImage }) })
      ] }) })
    }
  );
};
const about = "_about_43zhk_1";
const title$1 = "_title_43zhk_34";
const description$1 = "_description_43zhk_45";
const tag = "_tag_43zhk_55";
const tagText = "_tagText_43zhk_68";
const image = "_image_43zhk_89";
const svg$1 = "_svg_43zhk_94";
const button$1 = "_button_43zhk_110";
const polaroid = "_polaroid_43zhk_120";
const styles$1 = {
  about,
  title: title$1,
  description: description$1,
  tag,
  tagText,
  image,
  svg: svg$1,
  button: button$1,
  polaroid
};
const AboutText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$1.title, "data-visible": visible, level: 2, id: titleId, children: "Hi!" }),
  /* @__PURE__ */ jsx(Heading, { className: styles$1.title, "data-visible": visible, level: 3, weight: "light", id: titleId, children: "This new website is still under construction." }),
  /* @__PURE__ */ jsxs(Text, { className: styles$1.description, "data-visible": visible, size: "l", as: "p", children: [
    "I'm currently converting my legacy website to a new, modern, and responsive design, based on ",
    /* @__PURE__ */ jsx(Link, { href: "https://react.dev/", children: "React" }),
    ". I know it's probably overkill for a personal website/portfolio, but I learn best by screwing up. Some things might look screwy on your browser or mobile right now."
  ] }),
  /* @__PURE__ */ jsxs(Text, { className: styles$1.description, "data-visible": visible, size: "l", as: "p", children: [
    "I'm working on it. You can check out the ",
    /* @__PURE__ */ jsx(Link, { href: "https://storybook.stephenjlu.com/", children: "Storybook" }),
    " to see the component designs."
  ] }),
  /* @__PURE__ */ jsxs(Text, { className: styles$1.description, "data-visible": visible, size: "l", as: "p", children: [
    "In the meantime, you can find me at my ",
    /* @__PURE__ */ jsx(Link, { href: "https://legacy.StephenJLu.com/", children: "legacy website" }),
    " or on ",
    /* @__PURE__ */ jsx(Link, { href: "https://www.linkedin.com/in/stephenjlu/", children: "LinkedIn" }),
    "."
  ] })
] });
const About = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$1.about,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, unmount: false, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$1.tag, "aria-hidden": true, children: [
          /* @__PURE__ */ jsx(
            Divider,
            {
              notchWidth: "64px",
              notchHeight: "8px",
              collapsed: !visible2,
              collapseDelay: 1e3
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$1.tagText, "data-visible": visible2, children: "Welcome!" })
        ] }),
        /* @__PURE__ */ jsx(AboutText, { visible: visible2, titleId }),
        /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            className: styles$1.button,
            "data-visible": visible2,
            href: "https://legacy.stephenjlu.com/contact",
            icon: "send",
            children: "Contact Me"
          }
        )
      ] }) })
    }
  );
};
const projects = "_projects_joyf8_1";
const content = "_content_joyf8_69";
const summary = "_summary_joyf8_91";
const details = "_details_joyf8_129";
const banner = "_banner_joyf8_155";
const svg = "_svg_joyf8_205";
const index = "_index_joyf8_287";
const indexNumber = "_indexNumber_joyf8_305";
const title = "_title_joyf8_349";
const description = "_description_joyf8_387";
const button = "_button_joyf8_425";
const styles = {
  projects,
  content,
  summary,
  details,
  banner,
  svg,
  index,
  indexNumber,
  title,
  description,
  button
};
function Projects({
  id,
  sectionRef,
  visible: sectionVisible,
  index: index2 = 0,
  title: title2,
  description: description2,
  bannerImage,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  useTheme();
  const width = useWindowSize();
  const titleId = `${id}-title`;
  const isMobile = width.w <= media.tablet;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  function renderBanner({ visible }) {
    return /* @__PURE__ */ jsx("div", { className: styles.banner, "data-visible": visible, children: /* @__PURE__ */ jsx(
      Image$1,
      {
        src: bannerImage,
        alt: "Project banner",
        width: 600,
        height: 300,
        style: { objectFit: "cover" }
      }
    ) });
  }
  function renderDetails({ visible }) {
    return /* @__PURE__ */ jsxs("div", { className: styles.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles.button, "data-visible": visible, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles.projects,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, unmount: false, children: (props) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails({ visible: props.visible }),
          renderBanner({ visible: props.visible, bannerImage: props.bannerImage })
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderBanner({ visible: props.visible, bannerImage: props.bannerImage }),
          renderDetails({ visible: props.visible })
        ] })
      ] }) }) })
    }
  );
}
const webDevImage = "/assets/web-dev-cropped-CqgC9GYc.png";
const csiCEOImage = "/assets/csi-ceo-OCBHHBWz.png";
const musicImage = "/assets/music-PLXlTp04.png";
const Page = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const home2 = useRef(null);
  const about2 = useRef(null);
  const webDev = useRef(null);
  const csiCEO = useRef(null);
  const music = useRef(null);
  useEffect(() => {
    const sections = [home2, about2, webDev, csiCEO, music];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(home2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { "data-theme": "dark", className: `${styles$3.page} ${styles$3.container}`, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      Home,
      {
        id: "home",
        sectionRef: home2,
        visible: visibleSections.includes(home2.current)
      }
    ),
    /* @__PURE__ */ jsx(
      Projects,
      {
        id: "web-dev",
        sectionRef: webDev,
        visible: visibleSections.includes(webDev.current),
        index: 1,
        title: "Web Design and Development for the Public Good",
        buttonText: "View Projects",
        buttonLink: "/projects/web-dev",
        bannerImage: webDevImage
      }
    ),
    /* @__PURE__ */ jsx(
      Projects,
      {
        id: "csi-ceo",
        sectionRef: csiCEO,
        visible: visibleSections.includes(csiCEO.current),
        index: 2,
        title: "CSI to CEO: What the Dead Can Teach Us About Life and Leadership",
        buttonText: "Book Website",
        buttonLink: "https://www.CSItoCEO.com",
        bannerImage: csiCEOImage
      }
    ),
    /* @__PURE__ */ jsx(
      Projects,
      {
        id: "music",
        sectionRef: music,
        visible: visibleSections.includes(music.current),
        index: 3,
        title: "Music & Electronic Production",
        buttonText: "Listen In",
        buttonLink: "/projects/music",
        bannerImage: musicImage
      }
    ),
    /* @__PURE__ */ jsx(
      About,
      {
        id: "about",
        sectionRef: about2,
        visible: visibleSections.includes(about2.current)
      }
    )
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BF17NoGw.js?client-route=1", "imports": ["/assets/components-BRXnhjxE.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-D1qNLOuK.js?client-route=1", "imports": ["/assets/components-BRXnhjxE.js", "/assets/config-TWCdCk-N.js", "/assets/loader-CaqaPE8x.js"], "css": ["/assets/config-DcSU-yMW.css", "/assets/loader-BFaiECiV.css", "/assets/root-B87oRh0L.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BfFBgb1r.js?client-route=1", "imports": ["/assets/components-BRXnhjxE.js", "/assets/config-TWCdCk-N.js", "/assets/link-B4wG9071.js"], "css": ["/assets/config-DcSU-yMW.css", "/assets/link-BLaSEycy.css", "/assets/route-UoUCyV_o.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-C2KKMbZs.js?client-route=1", "imports": ["/assets/components-BRXnhjxE.js", "/assets/config-TWCdCk-N.js", "/assets/link-B4wG9071.js", "/assets/loader-CaqaPE8x.js"], "css": ["/assets/config-DcSU-yMW.css", "/assets/link-BLaSEycy.css", "/assets/loader-BFaiECiV.css", "/assets/route-DxwS2D6P.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-C2KKMbZs.js?client-route=1", "imports": ["/assets/components-BRXnhjxE.js", "/assets/config-TWCdCk-N.js", "/assets/link-B4wG9071.js", "/assets/loader-CaqaPE8x.js"], "css": ["/assets/config-DcSU-yMW.css", "/assets/link-BLaSEycy.css", "/assets/loader-BFaiECiV.css", "/assets/route-DxwS2D6P.css"] } }, "url": "/assets/manifest-920d184c.js", "version": "920d184c" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
