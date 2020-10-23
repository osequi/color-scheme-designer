import React from "react";
import Hues from "./Hues";

export default {
  component: Hues,
  title: "Hues",
};

const Template = (args) => <Hues {...args} />;

export const Default = Template.bind({});
Default.args = {};
