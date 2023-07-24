import type { Meta, StoryObj } from '@storybook/react';

import { ButtonClose } from './ButtonClose';

const meta = {
    title: 'Button/ButtonClose',
    component: ButtonClose,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ButtonClose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        style: {},
    },
};

