import React from "react";
import Setup from "./Setup";

export default {
  component: Setup,
  title: "Setup"
};

const Template = args => <Setup {...args} />;

export const Default = Template.bind({});
Default.args = {};
