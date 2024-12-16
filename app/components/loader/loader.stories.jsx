import { Loader } from '../Components';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Loader',
};

export const Default = () => (
  <StoryContainer>
    <Loader width={48} />
  </StoryContainer>
);
