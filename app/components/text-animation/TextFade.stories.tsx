import FadeText from './TextFade';
import { Heading } from '..';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Fade Text',
  args: {
    text: 'This is a fade-in text animation',
    delay: 0,
  },
};

interface TextProps {
  text: string;
  delay: number;
}

export const Text = ({ text }: TextProps) => (
  <StoryContainer>
    <Heading level={3}>
      <FadeText delay={1000} fadeText={text} />
    </Heading>
  </StoryContainer>
);


