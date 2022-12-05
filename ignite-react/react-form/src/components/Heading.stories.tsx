import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Loren Ipsem",
  },
} as Meta<HeadingProps>;

export const Default: StoryObj = {};
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        hasChild: true,
        children: (
            <h1>Test with h1</h1>
        )
    }
};

