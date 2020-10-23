import React from "react";
import Headings from "./Headings";

export default {
  title: "Headings",
  component: Headings,
};

export const Default = () => <Headings />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is empty by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Headings children="Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code." />
);

export const Hidden = () => (
  <Headings
    children="Please check the `HTML` tab on the right sidebar for the generated code."
    display={false}
  />
);

export const CustomLevel = () => <Headings level="h1" children="Level is H1" />;

export const CustomClassName = () => (
  <Headings className="Custom" children="className is `Custom`" />
);
