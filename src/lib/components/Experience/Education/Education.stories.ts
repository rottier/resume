import type { Meta, StoryObj } from "@storybook/svelte";
import Education from "./Education.svelte";

const meta = {
  title: "Components/Experience/Education",
  tags: ["autodocs"],
  component: Education,
} satisfies Meta<Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    Component: Education,
    props: args,
  }),
  args: {},
};
