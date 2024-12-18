import React, { useState } from 'react';
import { Button, Divider, Heading, Section,
  Text, Image, Transition, useTheme } from '../../components/Components';
import { useWindowSize } from 'app/hooks';
import { cssProps, media } from 'app/utils/style';
import styles from './projects.module.css';

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

  interface RenderBannerProps {
    visible: boolean;
    bannerImage: string;  
  }

  interface RenderDetailsProps {
    visible: boolean;  
  }

function renderBanner({ visible }: RenderBannerProps) {  
    return (
    <div className={styles.banner} data-visible={visible}>
      <Image
        src={bannerImage}
        alt="Project banner"
        width={600} // Set the desired width
        height={300} // Set the desired height
        style={{ objectFit: 'cover' }} // Ensure the image covers the specified dimensions
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
          {(props: { visible: boolean, bannerImage: string }) => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderDetails({ visible: props.visible })}
                  {renderBanner({ visible: props.visible, bannerImage: props.bannerImage })}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderBanner({ visible: props.visible, bannerImage: props.bannerImage })}
                  {renderDetails({ visible: props.visible })}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}