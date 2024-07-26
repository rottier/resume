import type { Meta, StoryObj } from "@storybook/svelte";
import Job from "./Job.svelte";
import { JobLocation } from ".";

const meta = {
  title: "Components/Experience/Job",
  tags: ["autodocs"],
  component: Job,
  argTypes: {
    jobLocation: {
      options: Object.values(JobLocation),
      mapping: Object.values(JobLocation),
      control: {
        type: "select",
        labels: Object.keys(JobLocation),
      },
    },
  },
} satisfies Meta<Job>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    Component: Job,
    props: args,
  }),
  args: {},
};
