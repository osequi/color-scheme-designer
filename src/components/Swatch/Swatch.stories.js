import React from "react";
import Swatch from "./Swatch";

export default {
  component: Swatch,
  title: "Swatch",
};

const Template = (args) => <Swatch {...args} />;

export const Default = Template.bind({});
Default.args = {};
