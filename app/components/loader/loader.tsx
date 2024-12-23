import { Text } from '~/components/text/text';
import { useReducedMotion } from 'framer-motion';
import { classes, cssProps } from '../../utils/style';
import { forwardRef, CSSProperties } from 'react';
import styles from './loader.module.css';

interface LoaderProps {
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  text?: string;
  center?: boolean;
  [key: string]: any; // Allow additional props
}

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  (
    { className, style, width = 32, height = 4, text = 'Loading...', center, ...rest },
    ref
  ) => {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
      return (
        <Text className={classes(styles.text, className)} weight="medium" {...rest}>
          {text}
        </Text>
      );
    }

    return (
      <div
        ref={ref}
        className={classes(styles.loader, className)}
        data-center={center}
        style={cssProps({ width, height }, style as { [key: string]: string | number })}
        {...rest}
      >
        <div className={styles.span} />
      </div>
    );
  }
);