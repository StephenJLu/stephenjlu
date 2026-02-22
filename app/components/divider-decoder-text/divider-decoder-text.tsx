import React from 'react';
import { Divider } from '~/components/divider/divider';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import InViewport from '~/components/in-viewport/InViewport';

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
}) => (
  <InViewport>
    {(inViewport) => {
      const shouldAnimate = visible && inViewport;

      return (
        <div className={className} aria-hidden>
          <Divider
            notchWidth={notchWidth}
            notchHeight={notchHeight}
            collapsed={!shouldAnimate}
            collapseDelay={shouldAnimate ? dividerDelay : 0}
          />
          <div className={textClassName} data-visible={visible}>
            {shouldAnimate && <DecoderText text={text} delay={decoderDelay} />}
          </div>
        </div>
      );
    }}
  </InViewport>
);
