import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Section } from '~/components/section/section';
import { baseMeta } from '../../utils/meta';
import styles from './gallery.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Gallery',
    description: 'A collection of memories and moments',
  });
};

const images = [
  {
    original: '/gallery/images/alligator-swamps.webp',
    thumbnail: '/gallery/images/alligator-swamps.webp',
    description: 'May 31, 2016 - Found an alligator in the swamps of New Orleans',
    originalAlt: 'May 31, 2016 - Found an alligator in the swamps of New Orleans',
  },
  {
    original: '/gallery/images/appleashun-kids.webp',
    thumbnail: '/gallery/images/appleashun-kids.webp',
    description: 'June 14, 2019 - The Apple-A-Shun Kids post-excavation at the Body Farm, University of Tennessee, Knoxville, Forensic Anthropology Center.',
    originalAlt: 'June 14, 2019 - The Apple-A-Shun Kids post-excavation at the Body Farm, University of Tennessee, Knoxville, Forensic Anthropology Center',
  },
  {
    original: '/gallery/images/azdps.webp',
    thumbnail: '/gallery/images/azdps.webp',
    description: 'August 21, 2008 - Working at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
    originalAlt: 'August 21, 2008 - Working at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
  },
  {
    original: '/gallery/images/bpacourse.webp',
    thumbnail: '/gallery/images/bpacourse.webp',
    description: 'July 10, 2013 - Being morbidly silly at a Basic Bloodstain Pattern Analysis course in San Diego, CA',
    originalAlt: 'July 10, 2013 - Being morbidly silly at a Basic Bloodstain Pattern Analysis course in San Diego, CA',
  },
  {
    original: '/gallery/images/camping.webp',
    thumbnail: '/gallery/images/camping.webp',
    description: 'October 30, 2016 - Camping with friends',
    originalAlt: 'October 30, 2016 - Camping with friends',
  },
  {
    original: '/gallery/images/crossfit-purg.webp',
    thumbnail: '/gallery/images/crossfit-purg.webp',
    description: 'December 11, 2010 - Christmas WOD at CrossFit Purgatory',
    originalAlt: 'December 11, 2010 - Christmas WOD at CrossFit Purgatory',
  },
  {
    original: '/gallery/images/crowd3.webp',
    thumbnail: '/gallery/images/crowd3.webp',
    description: 'On January 8, 2011, U.S. Representative Gabby Giffords and 18 others were shot during a constituent meeting held in a supermarket parking lot in Casas Adobes, Arizona, in the Tucson metropolitan area. The United We Run 5K was organized by CrossFit Now and CrossFit Purgatory in the weeks afterwards to benefit the families of the shooting victims.',
    originalAlt: 'On January 8, 2011, U.S. Representative Gabby Giffords and 18 others were shot during a constituent meeting held in a supermarket parking lot in Casas Adobes, Arizona, in the Tucson metropolitan area. The United We Run 5K was organized by CrossFit Now and CrossFit Purgatory in the weeks afterwards to benefit the families of the shooting victims.',
  },
  {
    original: '/gallery/images/fbica-graduation.webp',
    thumbnail: '/gallery/images/fbica-graduation.webp',
    description: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
    originalAlt: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
  },
  {
    original: '/gallery/images/flatiron.webp',
    thumbnail: '/gallery/images/flatiron.webp',
    description: 'January 24, 2020 - On top of the Flatiron in Apache Junction, AZ',
    originalAlt: 'January 24, 2020 - On top of the Flatiron in Apache Junction, AZ',
  },
  {
    original: '/gallery/images/gaslamp.webp',
    thumbnail: '/gallery/images/gaslamp.webp',
    description: 'February 22, 2019 - Celebrating with friends in the Gaslamp Quarter, San Diego, CA',
    originalAlt: 'February 22, 2019 - Celebrating with friends in the Gaslamp Quarter, San Diego, CA',
  },
  {
    original: '/gallery/images/meet-a-scientist.webp',
    thumbnail: '/gallery/images/meet-a-scientist.webp',
    description: 'March 22, 2014 - Talking about forensics with some young visitors at Meet a Scientist Day at Petco Park',
    originalAlt: 'March 22, 2014 - Talking about forensics with some young visitors at Meet a Scientist Day at Petco Park',
  },  
  {
    original: '/gallery/images/nihgroup.webp',
    thumbnail: '/gallery/images/nihgroup.webp',
    description: 'August 6, 2003 - Blanchette-Mackie lab group in front of Building 10, or the NIH Clinical Center',
    originalAlt: 'August 6, 2003 - Blanchette-Mackie lab group in front of Building 10, or the NIH Clinical Center',
  },
  {
    original: '/gallery/images/nih-pipette.webp',
    thumbnail: '/gallery/images/nih-pipette.webp',
    description: 'August 7, 2003 - Stephen working in the Blanchette-Mackie laboratory at the NIDDK/NIH',
    originalAlt: 'August 7, 2003 - Stephen working in the Blanchette-Mackie laboratory at the NIDDK/NIH',
  },
  {
    original: '/gallery/images/old-azdps.webp',
    thumbnail: '/gallery/images/old-azdps.webp',
    description: 'April 9, 2009 - Retro silliness at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
    originalAlt: 'April 9, 2009 - Retro silliness at the Arizona Department of Public Safety Southern Regional Crime Laboratory',
  },
  {
    original: '/gallery/images/pbk.webp',
    thumbnail: '/gallery/images/pbk.webp',
    description: 'May 8, 2005 - At the Phi Beta Kappa induction ceremony with fellow inductees at the University of Arizona',
    originalAlt: 'May 8, 2005 - At the Phi Beta Kappa induction ceremony with fellow inductees at the University of Arizona',
  },
  {
    original: '/gallery/images/petco.webp',
    thumbnail: '/gallery/images/petco.webp',
    description: 'July 14, 2017 - Stephen and family at Petco Park for a Padres game',
    originalAlt: 'July 14, 2017 - Stephen and family at Petco Park for a Padres game',
  },
  {
    original: '/gallery/images/potato-chip.webp',
    thumbnail: '/gallery/images/potato-chip.webp',
    description: 'January 14, 2017 - Stephen at the top of the Mt. Woodson Trail near Potato Chip Rock',
    originalAlt: 'January 14, 2017 - Stephen at the top of the Mt. Woodson Trail near Potato Chip Rock',
  },
  {
    original: '/gallery/images/range-day.webp',
    thumbnail: '/gallery/images/range-day.webp',
    description: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
    originalAlt: 'April 24, 2023 - The FBI San Diego Citizens Academy Graduation, Class of 2023',
  },
  {
    original: '/gallery/images/san-diego.webp',
    thumbnail: '/gallery/images/san-diego.webp',
    description: 'July 24, 2006 - Visiting Old Town San Diego with friends',
    originalAlt: 'July 24, 2006 - Visiting Old Town San Diego with friends',
  },
  {
    original: '/gallery/images/sdsd-firearms.webp',
    thumbnail: '/gallery/images/sdsd-firearms.webp',
    description: 'August 25, 2016 - Stephen working in the Firearms Lab at the San Diego County Sheriff\'s Department Regional Crime Laboratory',
    originalAlt: 'August 25, 2016 - Stephen working in the Firearms Lab at the San Diego County Sheriff\'s Department Regional Crime Laboratory',
  },
  {
    original: '/gallery/images/sdsd-lgbtq.webp',
    thumbnail: '/gallery/images/sdsd-lgbtq.webp',
    description: 'July 7, 2022 - The San Diego County Sheriff\'s LGBTQ+ Advisory Council',
    originalAlt: 'July 7, 2022 - The San Diego County Sheriff\'s LGBTQ+ Advisory Council',
  },
  {
    original: '/gallery/images/sedona-wedding.webp',
    thumbnail: '/gallery/images/sedona-wedding.webp',
    description: 'April 23, 2016 - Enjoying good times at a wedding in Sedona, AZ',
    originalAlt: 'April 23, 2016 - Enjoying good times at a wedding in Sedona, AZ',
  },
  {
    original: '/gallery/images/silicon-valley.webp',
    thumbnail: '/gallery/images/silicon-valley.webp',
    description: 'May 6, 2017 - Team silliness at the Silicon Valley Kettlebell Open Competition',
    originalAlt: 'May 6, 2017 - Team silliness at the Silicon Valley Kettlebell Open Competition',
  },
  {
    original: '/gallery/images/thailand.webp',
    thumbnail: '/gallery/images/thailand.webp',
    description: 'August 12, 2004 - At the Pattaya Million Years Stone Park & Crocodile Farm in Pattaya City, Thailand',
    originalAlt: 'August 12, 2004 - At the Pattaya Million Years Stone Park & Crocodile Farm in Pattaya City, Thailand',
  },
  {
    original: '/gallery/images/tiger-columbus-zoo.webp',
    thumbnail: '/gallery/images/tiger-columbus-zoo.webp',
    description: 'November 7, 2014 - Heading into battle on a tiger at the Columbus Zoo',
    originalAlt: 'November 7, 2014 - Heading into battle on a tiger at the Columbus Zoo',
  },
];

export const Gallery = () => {
  return (
    <Section className={styles.gallery}>      
      <ImageGallery 
        items={images}
        additionalClass={styles.content}
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
        renderItem={(item) => (
          <div className={styles.slideWrapper}>
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
        renderThumbInner={(item) => (
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
    </Section>
  );
};