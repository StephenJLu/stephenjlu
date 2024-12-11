import { useReducedMotion, useSpring } from 'framer-motion';
import React, { memo, useEffect, useRef } from 'react';
import { delay } from '../../utils/delay';
import { classes } from '../../utils/style';
import { VisuallyHidden } from '../visually-hidden/visually-hidden';
import styles from './decoder-text.module.css';

const glyphs = [
  '0', '1',
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

function shuffle(content: string[], output: { type: string; value: string }[], position: number) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

interface DecoderTextProps {
  text: string;
  start?: boolean;
  delay?: number;
  className?: string;
  [key: string]: any;
}

export const DecoderText: React.FC<DecoderTextProps> = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef<{ type: string; value: string }[]>([{ type: CharType.Glyph, value: '' }]);
    const container = useRef<HTMLSpanElement>(null);
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation: any;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        if (containerInstance) {
          containerInstance.innerHTML = characterMap.join('');
        }
      };

      const unsubscribeSpring = decoderSpring.on('change', value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);

DecoderText.displayName = 'DecoderText';
