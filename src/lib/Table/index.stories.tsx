import type { Meta, StoryObj } from "@storybook/react";
import Table from ".";

const meta: Meta<typeof Table> = {
  title: "Library/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTable: Story = {
  args: {
    menuItems: [
      "Archive",
      "Share",
      "Download",
      "Detail",
      "Tag",
      "Edit",
      "Delete",
    ],
    filterKeys: ["department", "paymentDate", "paymentStatus"],
  },
};

export const ReducedTable: Story = {
  args: {
    menuItems: ["Archive", "Share", "Download", "Delete"],
    filterKeys: ["paymentDate", "paymentStatus"],
  },
};
