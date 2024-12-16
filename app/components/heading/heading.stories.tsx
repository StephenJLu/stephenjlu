import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';
import { StoryContainer } from '../../../.storybook/story-container';

const meta = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },  
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    align: 'center',
    weight: 'medium',
    children: 'Heading Text',
  },
};

export const Level = () => (
  <StoryContainer vertical>
    <Heading level={0}>Heading 0</Heading>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
  </StoryContainer>
);

export const Weight = () => (
  <StoryContainer vertical>
    <Heading level={3} weight="regular">
      Regular
    </Heading>
    <Heading level={3} weight="medium">
      Medium
    </Heading>
    <Heading level={3} weight="bold">
      Bold
    </Heading>
  </StoryContainer>
);

export const Align = () => (
  <StoryContainer vertical stretch>
    <Heading level={3} align="auto">
      Start
    </Heading>
    <Heading level={3} align="center">
      Center
    </Heading>
  </StoryContainer>
);
