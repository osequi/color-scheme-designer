import React from "react";
import H1 from "./H1";

export default {
  component: H1,
  title: "H1"
};

const Template = args => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
