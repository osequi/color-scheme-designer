import React from "react";
import ColorModels from "./ColorModels";

export default {
  component: ColorModels,
  title: "ColorModels",
};

const Template = (args) => <ColorModels {...args} />;

export const Default = Template.bind({});
Default.args = {};
