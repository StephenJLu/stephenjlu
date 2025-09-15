import React, { useState, useEffect } from 'react';
import { Section } from '~/components/section/section';
// @ts-ignore
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './gallery.module.css';

interface GalleryProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface GalleryComponentProps extends GalleryProps {
  visible: boolean;    
}

const images = [
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/765b0f76-d4f1-49d9-60b9-af2a8ef43d00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/765b0f76-d4f1-49d9-60b9-af2a8ef43d00/public',
    description: 'May 31, 2016 - Found an alligator in the swamps of New Orleans',
    originalAlt: 'May 31, 2016 - Found an alligator in the swamps of New Orleans',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/08a0e532-fc4b-4ac2-e62d-0067e7262e00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/08a0e532-fc4b-4ac2-e62d-0067e7262e00/public',
    description: 'June 14, 2019 - The Apple-A-Shun Kids post-excavation at the Body Farm, University of Tennessee, Knoxville, Forensic Anthropology Center.',
    originalAlt: 'June 14, 2019 - The Apple-A-Shun Kids post-excavation at the Body Farm, University of Tennessee, Knoxville, Forensic Anthropology Center',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/1dd7cd8c-5b36-4d05-a511-7e1ac361eb00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/1dd7cd8c-5b36-4d05-a511-7e1ac361eb00/public',
    description: 'August 21, 2008 - Working at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
    originalAlt: 'August 21, 2008 - Working at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/d9c40847-2364-44d0-7ce7-b99ba812ee00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/d9c40847-2364-44d0-7ce7-b99ba812ee00/public',
    description: 'July 10, 2013 - Being morbidly silly at a Basic Bloodstain Pattern Analysis course in San Diego, CA',
    originalAlt: 'July 10, 2013 - Being morbidly silly at a Basic Bloodstain Pattern Analysis course in San Diego, CA',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/d34ab7d3-84af-4f23-0be0-143e1814f500/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/d34ab7d3-84af-4f23-0be0-143e1814f500/public',
    description: 'October 30, 2016 - Camping with friends',
    originalAlt: 'October 30, 2016 - Camping with friends',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/57ffeb5d-be58-4d54-abf4-054030170200/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/57ffeb5d-be58-4d54-abf4-054030170200/public',
    description: 'December 11, 2010 - Christmas WOD at CrossFit Purgatory',
    originalAlt: 'December 11, 2010 - Christmas WOD at CrossFit Purgatory',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/913fa3e3-6625-4f33-35f6-35616c4f9d00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/913fa3e3-6625-4f33-35f6-35616c4f9d00/public',
    description: 'On January 8, 2011, U.S. Representative Gabby Giffords and 18 others were shot during a constituent meeting held in a supermarket parking lot in Casas Adobes, Arizona, in the Tucson metropolitan area. The United We Run 5K was organized by CrossFit Now and CrossFit Purgatory in the weeks afterwards to benefit the families of the shooting victims.',
    originalAlt: 'On January 8, 2011, U.S. Representative Gabby Giffords and 18 others were shot during a constituent meeting held in a supermarket parking lot in Casas Adobes, Arizona, in the Tucson metropolitan area. The United We Run 5K was organized by CrossFit Now and CrossFit Purgatory in the weeks afterwards to benefit the families of the shooting victims.',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/b1ed797d-fec2-4dd7-e8c5-5c227ab8fa00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/b1ed797d-fec2-4dd7-e8c5-5c227ab8fa00/public',
    description: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
    originalAlt: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/724a417b-e66a-4a23-e579-caa282ea2b00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/724a417b-e66a-4a23-e579-caa282ea2b00/public',
    description: 'January 24, 2020 - On top of the Flatiron in Apache Junction, AZ',
    originalAlt: 'January 24, 2020 - On top of the Flatiron in Apache Junction, AZ',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/cd1a7670-0725-4b0e-7832-6d79746d2300/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/cd1a7670-0725-4b0e-7832-6d79746d2300/public',
    description: 'February 22, 2019 - Celebrating with friends in the Gaslamp Quarter, San Diego, CA',
    originalAlt: 'February 22, 2019 - Celebrating with friends in the Gaslamp Quarter, San Diego, CA',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/1a0aae4f-b5fc-46a3-b15c-1e042727ff00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/1a0aae4f-b5fc-46a3-b15c-1e042727ff00/public',
    description: 'March 22, 2014 - Talking about forensics with some young visitors at Meet a Scientist Day at Petco Park',
    originalAlt: 'March 22, 2014 - Talking about forensics with some young visitors at Meet a Scientist Day at Petco Park',
  },  
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/a76e13b7-824c-44b8-4221-88d125736500/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/a76e13b7-824c-44b8-4221-88d125736500/public',
    description: 'August 6, 2003 - Blanchette-Mackie lab group in front of Building 10, or the NIH Clinical Center',
    originalAlt: 'August 6, 2003 - Blanchette-Mackie lab group in front of Building 10, or the NIH Clinical Center',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/c2b128c0-15f4-49e7-8938-afebd8033d00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/c2b128c0-15f4-49e7-8938-afebd8033d00/public',
    description: 'August 7, 2003 - Stephen working in the Blanchette-Mackie laboratory at the NIDDK/NIH',
    originalAlt: 'August 7, 2003 - Stephen working in the Blanchette-Mackie laboratory at the NIDDK/NIH',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/6295a3da-655f-4e85-5eba-68dff6605700/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/6295a3da-655f-4e85-5eba-68dff6605700/public',
    description: 'April 9, 2009 - Retro silliness at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
    originalAlt: 'April 9, 2009 - Retro silliness at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/cb9bf561-f023-4603-5a31-613acffec400/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/cb9bf561-f023-4603-5a31-613acffec400/public',
    description: 'May 8, 2005 - At the Phi Beta Kappa induction ceremony with fellow inductees at the University of Arizona',
    originalAlt: 'May 8, 2005 - At the Phi Beta Kappa induction ceremony with fellow inductees at the University of Arizona',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/7b6873b7-58bc-4467-b629-7fc1f25b4700/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/7b6873b7-58bc-4467-b629-7fc1f25b4700/public',
    description: 'July 14, 2017 - Stephen and family at Petco Park for a Padres game',
    originalAlt: 'July 14, 2017 - Stephen and family at Petco Park for a Padres game',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/839097d6-ada3-42a4-a523-ac91a7ff9e00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/839097d6-ada3-42a4-a523-ac91a7ff9e00/public',
    description: 'January 14, 2017 - Stephen at the top of the Mt. Woodson Trail near Potato Chip Rock',
    originalAlt: 'January 14, 2017 - Stephen at the top of the Mt. Woodson Trail near Potato Chip Rock',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/2d153d00-2343-4f70-dc4d-8ec5ad789400/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/2d153d00-2343-4f70-dc4d-8ec5ad789400/public',
    description: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
    originalAlt: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/3fa70950-c186-4d5a-ed8f-b1d07ad8aa00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/3fa70950-c186-4d5a-ed8f-b1d07ad8aa00/public',
    description: 'July 24, 2006 - Visiting Old Town San Diego with friends',
    originalAlt: 'July 24, 2006 - Visiting Old Town San Diego with friends',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/73ff6414-56a8-4a46-4c63-d20c85f84a00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/73ff6414-56a8-4a46-4c63-d20c85f84a00/public',
    description: 'August 25, 2016 - Stephen working in the Firearms Lab at the San Diego County Sheriff\'s Department Regional Crime Laboratory',
    originalAlt: 'August 25, 2016 - Stephen working in the Firearms Lab at the San Diego County Sheriff\'s Department Regional Crime Laboratory',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/37e0bc7b-da0e-436d-8535-1b024471f600/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/37e0bc7b-da0e-436d-8535-1b024471f600/public',
    description: 'July 7, 2022 - The San Diego County Sheriff\'s LGBTQ+ Advisory Council',
    originalAlt: 'July 7, 2022 - The San Diego County Sheriff\'s LGBTQ+ Advisory Council',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/19275220-d223-4b88-2524-d1992e23f500/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/19275220-d223-4b88-2524-d1992e23f500/public',
    description: 'April 23, 2016 - Enjoying good times at a wedding in Sedona, AZ',
    originalAlt: 'April 23, 2016 - Enjoying good times at a wedding in Sedona, AZ',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/c5e83307-ddce-4f1e-477c-c255745fd900/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/c5e83307-ddce-4f1e-477c-c255745fd900/public',
    description: 'May 6, 2017 - Team silliness at the Silicon Valley Kettlebell Open Competition',
    originalAlt: 'May 6, 2017 - Team silliness at the Silicon Valley Kettlebell Open Competition',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/34f7e070-5acc-4a9d-4273-7269bc4c3f00/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/34f7e070-5acc-4a9d-4273-7269bc4c3f00/public',
    description: 'August 12, 2004 - At the Pattaya Million Years Stone Park & Crocodile Farm in Pattaya City, Thailand',
    originalAlt: 'August 12, 2004 - At the Pattaya Million Years Stone Park & Crocodile Farm in Pattaya City, Thailand',
  },
  {
    original: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/18b611a4-171e-4899-a3ed-b8c40a5e1100/public',
    thumbnail: 'https://stephenjlu.com/cdn-cgi/imagedelivery/X7Zx0_LYqqniiMBhW2W3Dg/18b611a4-171e-4899-a3ed-b8c40a5e1100/public',
    description: 'November 7, 2014 - Heading into battle on a tiger at the Columbus Zoo',
    originalAlt: 'November 7, 2014 - Heading into battle on a tiger at the Columbus Zoo',
  },
];

export const Gallery = ({ id, visible, sectionRef }: GalleryComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = `${id}-title`; 
  
  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => setFocused(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <Section       
      className={styles.gallery}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}  
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      data-visible={mounted}    
    >
      <div className={styles.content} data-visible={visible || focused}>
        <ImageGallery 
          items={images}
          thumbnailPosition="bottom"
          showPlayButton={true}
          showFullscreenButton={true}
          showThumbnails={true}
          showNav={true}
          showBullets={false}
          lazyLoad={true}
          autoPlay={false}
          slideInterval={3000}
          slideDuration={450}
          renderItem={(item: { original: string | undefined; originalAlt: string | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
            <div className={styles.slideWrapper} data-visible={visible || focused}>
              <img 
                src={item.original}
                alt={item.originalAlt}
                className={styles.image}
                loading="lazy"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          )}
          renderThumbInner={(item: { thumbnail: string | undefined; thumbnailAlt: string | undefined; }) => (
            <div className={styles.thumbnail}>
              <img
                src={item.thumbnail}
                alt={item.thumbnailAlt}
                className={styles.thumbnailImage}
                loading="lazy"
              />
            </div>
          )}        
        />
      </div>
    </Section>
  );
};