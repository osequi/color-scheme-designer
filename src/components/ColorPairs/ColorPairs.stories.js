import React from "react";
import ColorPairs from "./ColorPairs";

export default {
  component: ColorPairs,
  title: "ColorPairs",
};

const Template = (args) => <ColorPairs {...args} />;

export const Default = Template.bind({});
Default.args = {};
