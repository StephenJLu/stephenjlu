import { Link } from './link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://www.stephenjlu.com">Primary link</Link>
    <Link secondary href="https://www.stephenjlu.com">
      Secondary link
    </Link>
  </StoryContainer>
);
