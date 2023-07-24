import type { Meta, StoryObj } from '@storybook/react';
import AuthForm from './AuthForm';


const meta = {
    title: 'Form/Auth',
    component: AuthForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        style: {},
    },
};
