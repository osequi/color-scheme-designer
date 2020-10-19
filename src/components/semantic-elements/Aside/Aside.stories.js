import React from "react";
import Aside from "./Aside";

export default {
  component: Aside,
  title: "Aside"
};

const Template = args => <Aside {...args} />;

export const Default = Template.bind({});
Default.args = {};
