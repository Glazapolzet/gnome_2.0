import type { Meta, StoryObj } from '@storybook/react';
import PurpleButton from './PurpleButton';


const meta = {
    title: 'Button/PurpleButton',
    component: PurpleButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PurpleButton>;

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
