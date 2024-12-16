import { DecoderText } from '../../components/Components';
import { Heading } from '../Components';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Decoder Text',
  args: {
    text: 'This is some 1337 |-|4><0r text decoding',
  },
};

interface TextProps {
  text: string;
}

export const Text = ({ text }: TextProps) => (
  <StoryContainer>
    <Heading level={3}>
      <DecoderText delay={0} text={text} />
    </Heading>
  </StoryContainer>
);
