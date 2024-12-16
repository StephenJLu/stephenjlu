import PolaroidImage from './PolaroidImage';
import steveImage from './steve.jpg'; // Import the image file
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Polaroid Frame',
  args: {
    rotation: -10,
    imageUrl: steveImage,
  },
};

interface PolaroidProps {
  rotation: number;
  imageUrl: string;
}

export const Default = ({ rotation, imageUrl }: PolaroidProps) => (
  <StoryContainer>    
      <PolaroidImage rotation={rotation} imageUrl={imageUrl} />    
  </StoryContainer>
);

export const DifferentImage = () => (
  <StoryContainer>    
      <PolaroidImage rotation={16} imageUrl="https://legacy.stephenjlu.com/images/fltc.webp" />    
  </StoryContainer>
);