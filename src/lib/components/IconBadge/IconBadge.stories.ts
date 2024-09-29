import type { Meta, StoryObj } from '@storybook/svelte';
import IconBadge from './IconBadge.svelte'

const meta = {
	title: 'Components/IconBadge',
	tags: ['autodocs'],
	component: IconBadge,
} satisfies Meta<IconBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		Component: IconBadge,
		props: args
	}),
	args: {}
};