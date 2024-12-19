import PolaroidImage from './PolaroidImage';
import steveImage from './steve.svg'; // Import the image file
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Polaroid Frame',
  component: PolaroidImage,
  argTypes: {
    rotation: {
      control: { type: 'number', min: -20, max: 20 },
    },
    imageUrl: {
      control: 'text',
    },
  },
  args: {
    rotation: 0,
    imageUrl: steveImage,
  },
};

interface PolaroidProps {
  rotation?: number;
  imageUrl: string;
}

export const Default = () => (
  <StoryContainer stretch={true} vertical={true} style={{}}>
    <PolaroidImage imageUrl={steveImage} />
  </StoryContainer>
);

Default.args = {  
  imageUrl: steveImage,
};

export const DifferentImage = ({ rotation, imageUrl = '' }: PolaroidProps) => (
  <StoryContainer stretch={true} vertical={true} style={{}}>
    <PolaroidImage rotation={rotation} imageUrl={imageUrl} />
  </StoryContainer>
);

DifferentImage.args = {
  rotation: 16,
  imageUrl: "https://legacy.stephenjlu.com/images/fltc.webp",
};