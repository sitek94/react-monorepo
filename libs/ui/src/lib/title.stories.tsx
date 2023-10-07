import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Title',
};
export default meta;
type Story = StoryObj<typeof Title>;

export const Primary = {
  args: {
    children: 'Hello, from ui',
  },
};
