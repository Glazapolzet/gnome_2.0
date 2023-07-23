import type { Meta, StoryObj } from '@storybook/react';

import { Popup } from './Popup';

const meta = {
  title: 'Popup/Base',
  component: Popup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "popup name",
    title: "popup title",
    description: "popup description",
  },
};

