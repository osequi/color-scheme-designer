import React from "react";
import SemanticElements from "./SemanticElements";

export default {
  component: SemanticElements,
  title: "SemanticElements"
};

const Template = args => <SemanticElements {...args} />;

export const Default = Template.bind({});
Default.args = {};
