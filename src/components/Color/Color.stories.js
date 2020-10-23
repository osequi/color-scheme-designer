import React from "react";
import Color from "./Color";

export default {
  component: Color,
  title: "Color",
};

const Template = (args) => <Color {...args} />;

export const Default = Template.bind({});
Default.args = {};
