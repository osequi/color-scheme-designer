import React from "react";
import HuesMixer from "./HuesMixer";

export default {
  component: HuesMixer,
  title: "HuesMixer",
};

const Template = (args) => <HuesMixer {...args} />;

export const Default = Template.bind({});
Default.args = {};
