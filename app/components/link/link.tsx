import React, { forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from '@remix-run/react';
import { classes } from '~/utils/style';
import styles from './link.module.css';

// Define the supported file extensions
const VALID_EXT = ['txt', 'png', 'jpg'];

/**
 * Determines if the provided href should be rendered as a standard anchor (<a>) tag.
 * @param href - The URL to evaluate.
 * @returns A boolean indicating whether to use an anchor tag.
 */
function isAnchor(href: string): boolean {
  const extension = href.split('.').pop();
  const isValidExtension = VALID_EXT.includes(extension || '');
  return href.includes('://') || href.startsWith('#') || isValidExtension;
}

/**
 * Props interface for the Link component.
 * Extends React's AnchorHTMLAttributes to include all standard anchor properties.
 */
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  secondary?: boolean;
}

/**
 * Link Component
 * Renders either a standard <a> tag or Remix's <Link> component based on the href prop.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { rel, target, children, secondary = false, className, href, ...rest },
    ref
  ) => {
    const isExternal = href.includes('://');
    const relValue = rel || (isExternal ? 'noreferrer noopener' : undefined);
    const targetValue = target || (isExternal ? '_blank' : undefined);

    const linkProps = {
      className: classes(styles.link, className),
      'data-secondary': secondary,
      rel: relValue,
      href: href,
      target: targetValue,
      ref,
      ...rest,
    };

    if (isAnchor(href)) {
      return (
        <a {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <RouterLink        
        prefetch="intent"
        {...linkProps}
        to={href}
      >
        {children}
      </RouterLink>
    );
  }
);

// Set display name for better debugging and React DevTools integration
Link.displayName = 'Link';