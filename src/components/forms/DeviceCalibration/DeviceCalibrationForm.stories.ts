import type { Meta, StoryObj } from '@storybook/react';
import DeviceCalibrationForm from './DeviceCalibrationForm';


const meta = {
    title: 'Form/DeviceCalibration',
    component: DeviceCalibrationForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof DeviceCalibrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        style: {},
    },
};
