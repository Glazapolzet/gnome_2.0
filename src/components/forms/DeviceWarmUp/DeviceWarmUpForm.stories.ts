import type { Meta, StoryObj } from '@storybook/react';
import DeviceWarmUpForm from './DeviceWarmUpForm';


const meta = {
    title: 'Form/DeviceWarmUp',
    component: DeviceWarmUpForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof DeviceWarmUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        style: {},
    },
};
