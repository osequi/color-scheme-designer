import React from "react";
import Colors from "./Colors";

export default {
  component: Colors,
  title: "Colors",
};

const Template = (args) => <Colors {...args} />;

export const Default = Template.bind({});
Default.args = {};
