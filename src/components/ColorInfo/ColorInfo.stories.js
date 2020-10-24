import React from "react";
import ColorInfo from "./ColorInfo";

export default {
  component: ColorInfo,
  title: "ColorInfo",
};

const Template = (args) => <ColorInfo {...args} />;

export const Default = Template.bind({});
Default.args = {};
