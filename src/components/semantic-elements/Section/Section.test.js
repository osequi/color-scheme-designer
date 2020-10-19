import React from "react";
import { render } from "@testing-library/react";
import Section from "./Section";

it("has a Section component", () => {
  const { getByText } = render(<Section />);
  expect(getByText("Section")).toBeInTheDocument();
});
