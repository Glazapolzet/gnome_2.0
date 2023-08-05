import type { Meta, StoryObj } from '@storybook/react';
import ActivityMeasureForm from './ActivityMeasureForm';


const meta = {
    title: 'Form/ActivityMeasure',
    component: ActivityMeasureForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ActivityMeasureForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        style: {},
    },
};
