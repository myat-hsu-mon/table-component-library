import type { Meta, StoryObj } from "@storybook/react";
import FormatDate from ".";

const meta: Meta<typeof FormatDate> = {
  title: "Components/FormatDate",
  component: FormatDate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Date: Story = {
  args: {
    formattedDate: "2024-01-22",
  },
};

export const Yesterday: Story = {
  args: {
    formattedDate: "Yesterday",
  },
};

export const In2Days: Story = {
  args: {
    formattedDate: "In 2 days",
  },
};
