import type { Meta, StoryObj } from "@storybook/react";
import Department from ".";

const meta: Meta<typeof Department> = {
  title: "Components/Department",
  component: Department,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sales: Story = {
  args: {
    department: "sales",
  },
};

export const Designs: Story = {
  args: {
    department: "designs",
  },
};

export const Support: Story = {
  args: {
    department: "support",
  },
};
