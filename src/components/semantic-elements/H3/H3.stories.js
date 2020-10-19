import React from "react";
import H3 from "./H3";

export default {
  component: H3,
  title: "H3"
};

const Template = args => <H3 {...args} />;

export const Default = Template.bind({});
Default.args = {};
