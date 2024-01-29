import type { Meta, StoryObj } from "@storybook/react";

import FloatingMenu from ".";

const meta: Meta<typeof FloatingMenu> = {
  title: "Components/FloatingMenu",
  component: FloatingMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FullMenu: Story = {
  args: {
    menuItems: [
      "Archive",
      "Download",
      "Share",
      "Detail",
      "Tag",
      "Edit",
      "Delete",
    ],
    onMenuItemClick: () => {},
  },
};

export const CustomizableMenu: Story = {
  args: {
    menuItems: ["Archive", "Download", "Delete"],
    onMenuItemClick: () => {},
  },
};
