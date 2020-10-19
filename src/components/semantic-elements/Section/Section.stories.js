import React from "react";
import Section from "./Section";

export default {
  component: Section,
  title: "Section"
};

const Template = args => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {};
