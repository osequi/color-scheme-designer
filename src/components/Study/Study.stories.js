import React from "react";
import Study from "./Study";

export default {
  component: Study,
  title: "Study",
};

const Template = (args) => <Study {...args} />;

export const Default = Template.bind({});
Default.args = {};
