import React, { useState } from 'react';
import Button from '~/components/button/button';
import { Divider } from '~/components/divider/divider';
import { Heading } from '~/components/heading/heading';
import { Section } from '~/components/section/section';
import { Text } from '~/components/text/text';
import { Image } from '~/components/image/image';
import { Transition } from '~/components/transition/transition';
import { useTheme } from '~/components/theme-provider/theme-provider';
import { useWindowSize } from 'app/hooks';
import { cssProps, media } from 'app/utils/style';
import styles from './projects.module.css';
import legacyBanner from 'app/static/images/legacy.svg';
import legacyPlaceholder from 'app/static/images/legacy-placeholder.svg';
import fltcBanner from 'app/static/images/fltc.svg';
import fltcPlaceholder from 'app/static/images/fltc-placeholder.svg';
import alsBanner from 'app/static/images/als.svg';
import alsPlaceholder from 'app/static/images/als-placeholder.svg';
import cacBanner from 'app/static/images/cac.svg';
import cacPlaceholder from 'app/static/images/cac-placeholder.svg';
import turnstileBanner from 'app/static/images/turnstile.svg';
import turnstilePlaceholder from 'app/static/images/turnstile-placeholder.svg';
import commentsBanner from 'app/static/images/comments.svg';
import commentsPlaceholder from 'app/static/images/comments-placeholder.svg';
import striaeBanner from 'app/static/images/striae.svg';
import striaePlaceholder from 'app/static/images/striae-placeholder.svg';

interface ProjectsProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
  visible?: boolean;
  index?: number;
  title?: string;
  description?: string;
  bannerImage?: string;
  buttonText?: string;
  buttonLink?: string;
  alternate?: boolean;
}

export function Projects({
  id,
  sectionRef,
  visible: sectionVisible,
  index = 0,
  title,
  description,
  bannerImage,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}: ProjectsProps) {
  const [focused, setFocused] = useState(false);  
  const theme = useTheme();
  const width = useWindowSize();  
  const titleId = `${id}-title`;
  const isMobile = width.w <= media.tablet;  
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;

  const imageMap: Record<string, { src: string; placeholder: string }> = {
  legacy: {
    src: legacyBanner,
    placeholder: legacyPlaceholder,
  },
  fltc: {
    src: fltcBanner,
    placeholder: fltcPlaceholder,
  },
  als: {
    src: alsBanner,
    placeholder: alsPlaceholder,
  },
  cac: {
    src: cacBanner,
    placeholder: cacPlaceholder,
  },
  turnstile: {
    src: turnstileBanner,
    placeholder: turnstilePlaceholder,
  },
  comments: {
    src: commentsBanner,
    placeholder: commentsPlaceholder,
  },
  striae: {
    src: striaeBanner,
    placeholder: striaePlaceholder,
  },     
};

  interface RenderBannerProps {
    id: string;
    visible: boolean;
      
  }

  interface RenderDetailsProps {
    visible: boolean;  
  }

function renderBanner({ id, visible }: { id: string; visible: boolean }) {
  const { src, placeholder } = imageMap[id] || {};

  return (
    <div className={styles.banner} data-visible={visible}>
      <Image
        reveal
        delay={300}
        src={src}
        placeholder={placeholder}
        alt="Project banner"        
        height={300}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}


  function renderDetails({ visible }: RenderDetailsProps) {
    return (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {indexText}
          </span>
        </div>
        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Section
      className={styles.projects}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}    
      >
        <div className={styles.content}>
        <Transition in={sectionVisible || focused} unmount={false}>
  {({ visible }: { visible: boolean }) => (
    <>
      {!alternate && !isMobile && (
        <>
          {renderDetails({ visible })}
          {id && renderBanner({ id, visible })}
        </>
      )}
      {(alternate || isMobile) && (
        <>
          {id && renderBanner({ id, visible })}
          {renderDetails({ visible })}
        </>
      )}
    </>
  )}
</Transition>
        <div className={styles.divider}>
        <Divider />
      </div>        
      </div>      
    </Section>
  );
}