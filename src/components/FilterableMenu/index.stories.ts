import type { Meta, StoryObj } from "@storybook/react";

import FilterableMenu from ".";

const meta: Meta<typeof FilterableMenu> = {
  title: "Components/FilterableMenu",
  component: FilterableMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FullMenu: Story = {
  args: {
    filterKeys: ["department", "paymentStatus", "paymentDate"],
    setFilteredData: () => {},
  },
};

export const CustomizableMenu: Story = {
  args: {
    filterKeys: ["department", "paymentDate"],
    setFilteredData: () => {},
  },
};
