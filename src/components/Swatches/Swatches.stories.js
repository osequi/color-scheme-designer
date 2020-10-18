import React from "react";
import Swatches from "./Swatches";

export default {
  component: Swatches,
  title: "Swatches",
};

const Template = (args) => <Swatches {...args} />;

export const Default = Template.bind({});
Default.args = {};
