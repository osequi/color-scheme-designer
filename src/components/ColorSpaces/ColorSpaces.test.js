import React from "react";
import { render } from "@testing-library/react";
import ColorSpaces from "./ColorSpaces";

it("has a ColorSpaces component", () => {
  const { getByText } = render(<ColorSpaces />);
  expect(getByText("ColorSpaces")).toBeInTheDocument();
});
