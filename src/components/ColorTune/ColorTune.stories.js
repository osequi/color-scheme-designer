import React from "react";
import ColorTune from "./ColorTune";

export default {
  component: ColorTune,
  title: "ColorTune",
};

const Template = (args) => <ColorTune {...args} />;

export const Default = Template.bind({});
Default.args = {};
