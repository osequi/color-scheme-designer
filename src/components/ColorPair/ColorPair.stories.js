import React from "react";
import ColorPair from "./ColorPair";

export default {
  component: ColorPair,
  title: "ColorPair",
};

const Template = (args) => <ColorPair {...args} />;

export const Default = Template.bind({});
Default.args = {};
