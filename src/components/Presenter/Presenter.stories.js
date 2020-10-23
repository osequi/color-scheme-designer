import React from "react";
import Presenter from "./Presenter";

export default {
  component: Presenter,
  title: "Presenter",
};

const Template = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {};
