import type { Meta, StoryObj } from "@storybook/react";

import Profile from ".";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const JaneDoe: Story = {
  args: {
    name: "Jane Doe",
  },
};

export const JohnSmith: Story = {
  args: {
    name: "John Smith",
  },
};
