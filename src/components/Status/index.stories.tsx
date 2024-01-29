import type { Meta, StoryObj } from "@storybook/react";
import Status from ".";

const meta: Meta<typeof Status> = {
  title: "Components/Status",
  component: Status,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Pending: Story = {
  args: {
    status: "pending",
  },
};

export const Failed: Story = {
  args: {
    status: "failed",
  },
};

export const Done: Story = {
  args: {
    status: "done",
  },
};
