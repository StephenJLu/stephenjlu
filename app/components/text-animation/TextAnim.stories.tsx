import TextAnim from './TextAnim';
import { Heading } from '..';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Typing Text',
  args: {
    text: 'This is a typing text animation',
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
      <TextAnim delay={1000} typeText={text} />
    </Heading>
  </StoryContainer>
);


