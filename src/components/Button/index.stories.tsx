import type { Meta, StoryObj } from "@storybook/react";
import { EllipsisVerticalIcon, FunnelIcon } from "@heroicons/react/20/solid";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FiltersButton: Story = {
  args: {
    icon: FunnelIcon,
    text: "Filters",
  },
};

export const EllipsisButton: Story = {
  args: {
    icon: EllipsisVerticalIcon,
  },
};
