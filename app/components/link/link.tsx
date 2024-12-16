import React, { forwardRef } from 'react';
import { Link as RouterLink } from '@remix-run/react';
import { classes } from '../../utils/style';
import styles from './link.module.css';

// File extensions that can be linked to
const VALID_EXT = ['txt', 'png', 'jpg'];

function isAnchor(href: string): boolean {
  const isValidExtension = VALID_EXT.includes(href?.split('.').pop() || '');
  return href?.includes('://') || href?.[0] === '#' || isValidExtension;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  secondary?: boolean;
  className?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href?.includes('://');
    const relValue = rel || (isExternal ? 'noreferrer noopener' : undefined);
    const targetValue = target || (isExternal ? '_blank' : undefined);

    const linkProps = {
      className: classes(styles.link, className),
      ['data-secondary']: secondary,
      rel: relValue,
      href: href,
      target: targetValue,
      ref: ref,
      ...rest,
    };

    if (isAnchor(href)) {
      return (
        <a {...linkProps} href={href}>
          {children}
        </a>
      );
    }

    return (
      <RouterLink unstable_viewTransition prefetch="intent" {...linkProps} to={href}>
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';