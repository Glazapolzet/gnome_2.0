import type { Meta, StoryObj } from '@storybook/react';
import BackgroundMeasureForm from './BackgroundMeasureForm';


const meta = {
    title: 'Form/BackgroundMeasure',
    component: BackgroundMeasureForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof BackgroundMeasureForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        style: {},
    },
};
