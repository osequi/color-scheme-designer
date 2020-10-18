import React from "react";
import Designer from "./Designer";

export default {
  component: Designer,
  title: "Designer",
};

const Template = (args) => <Designer {...args} />;

export const Default = Template.bind({});
Default.args = {};
