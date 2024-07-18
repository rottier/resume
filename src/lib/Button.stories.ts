import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';

const meta = {
	title: 'Components/Button',
	tags: ['autodocs'],
	component: Button,
	argTypes: {
		width: { control: 'number' }
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		Component: Button,
		props: args
	}),
	args: {}
};