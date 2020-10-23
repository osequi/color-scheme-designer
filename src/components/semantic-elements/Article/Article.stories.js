import React from "react";
import Article from "./Article";

export default {
  component: Article,
  title: "Article"
};

const Template = args => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {};
