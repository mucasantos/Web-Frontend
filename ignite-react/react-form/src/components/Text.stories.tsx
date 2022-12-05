import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Loren Ipsem",
  },
} as Meta<TextProps>;

export const Default: StoryObj = {};
export const CustomComponent: StoryObj = {
    args: {
        hasChild: true,
        children: (
            <p>TEstando....</p>
        )
    }
};

