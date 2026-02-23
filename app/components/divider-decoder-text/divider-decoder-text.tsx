import React, { useRef } from 'react';
import { Divider } from '~/components/divider/divider';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import InViewport from '~/components/in-viewport/InViewport';
import styles from './divider-decoder-text.module.css';

interface DividerDecoderTextProps {
  visible: boolean;
  text: string;
  className?: string;
  textClassName?: string;
  dividerDelay?: number;
  decoderDelay?: number;
  notchWidth?: string | number;
  notchHeight?: string | number;
}

export const DividerDecoderText: React.FC<DividerDecoderTextProps> = ({
  visible,
  text,
  className,
  textClassName,
  dividerDelay = 1000,
  decoderDelay = 1300,
  notchWidth = '64px',
  notchHeight = '8px',
}) => {
  const hasEnteredOnce = useRef(false);
  const wasAnimating = useRef(false);
  const isReentryCycle = useRef(false);

  return (
    <InViewport>
      {(inViewport) => {
        const shouldAnimate = visible && inViewport;

        if (shouldAnimate && !wasAnimating.current) {
          isReentryCycle.current = hasEnteredOnce.current;
          hasEnteredOnce.current = true;
        }

        if (!shouldAnimate) {
          isReentryCycle.current = false;
        }

        wasAnimating.current = shouldAnimate;

        const reentryDividerDelay = 500;
        const proportionalDecoderDelay = Math.min(
          decoderDelay,
          Math.round((decoderDelay * reentryDividerDelay) / Math.max(dividerDelay, 1))
        );

        const currentDividerDelay = isReentryCycle.current ? reentryDividerDelay : dividerDelay;
        const currentDecoderDelay = isReentryCycle.current ? proportionalDecoderDelay : decoderDelay;

        return (
          <div className={className} aria-hidden>
            <Divider
              notchWidth={notchWidth}
              notchHeight={notchHeight}
              collapsed={!shouldAnimate}
              collapseDelay={shouldAnimate ? currentDividerDelay : 0}
            />
            <div className={textClassName} data-visible={visible}>
              {shouldAnimate ? (
                <DecoderText text={text} delay={currentDecoderDelay} />
              ) : (
                <span aria-hidden className={styles.placeholder}>
                  {text}
                </span>
              )}
            </div>
          </div>
        );
      }}
    </InViewport>
  );
};
