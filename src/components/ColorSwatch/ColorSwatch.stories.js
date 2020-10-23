import React from "react";
import ColorSwatch from "./ColorSwatch";

export default {
  component: ColorSwatch,
  title: "ColorSwatch",
};

const Template = (args) => <ColorSwatch {...args} />;

export const Default = Template.bind({});
Default.args = {};
