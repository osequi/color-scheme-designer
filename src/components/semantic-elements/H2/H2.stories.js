import React from "react";
import H2 from "./H2";

export default {
  component: H2,
  title: "H2"
};

const Template = args => <H2 {...args} />;

export const Default = Template.bind({});
Default.args = {};
