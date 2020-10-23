import React from "react";
import { render } from "@testing-library/react";
import ColorPairs from "./ColorPairs";

it("has a ColorPairs component", () => {
  const { getByText } = render(<ColorPairs />);
  expect(getByText("ColorPairs")).toBeInTheDocument();
});
