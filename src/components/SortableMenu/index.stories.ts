import type { Meta, StoryObj } from "@storybook/react";

import SortableMenu from ".";

import employees from "../../data/index.json";
import { Employee } from "../../interfaces";

const meta: Meta<typeof SortableMenu> = {
  title: "Components/SortableMenu",
  component: SortableMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTable: Story = {
  args: {
    data: employees as Employee[],
    setSortedData: () => {},
  },
};
