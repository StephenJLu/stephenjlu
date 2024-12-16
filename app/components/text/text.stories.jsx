import { Text } from '../Components';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Text',
};

export const Default = () => (
  <StoryContainer vertical>    
    <Text>This is some default text.</Text>
  </StoryContainer>
);

export const Size = () => (
  <StoryContainer vertical>
    <Text size="xl">XLarge</Text>
    <Text size="l">Large</Text>
    <Text size="m">Medium</Text>
    <Text size="s">Small</Text>
  </StoryContainer>
);

export const Weight = () => (
  <StoryContainer vertical>
    <Text weight="regular">Regular</Text>
    <Text weight="medium">Medium</Text>
    <Text weight="bold">Bold</Text>
  </StoryContainer>
);

export const Align = () => (
  <StoryContainer vertical stretch>
    <Text align="start">Start</Text>
    <Text align="center">Center</Text>
  </StoryContainer>
);
