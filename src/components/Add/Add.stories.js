import React from "react";
import Add from "./Add";

export default {
  component: Add,
  title: "Add",
};

const Template = (args) => <Add {...args} />;

export const Default = Template.bind({});
Default.args = {};
