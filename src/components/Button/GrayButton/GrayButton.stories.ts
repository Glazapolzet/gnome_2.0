import type { Meta, StoryObj } from '@storybook/react';
import GrayButton from './GrayButton';


const meta = {
    title: 'Button/GrayButton',
    component: GrayButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof GrayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        style: {},
        disabled: false,
        onClick: () => {},
        label: 'test label',
    },
};
