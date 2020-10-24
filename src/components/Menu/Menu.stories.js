import React from "react";
import Menu from "./Menu";

export default {
  component: Menu,
  title: "Menu",
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
