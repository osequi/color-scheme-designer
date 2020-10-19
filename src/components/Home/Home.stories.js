import React from "react";
import Home from "./Home";

export default {
  component: Home,
  title: "Home",
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
