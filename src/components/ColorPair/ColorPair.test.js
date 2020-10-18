import React from "react";
import { render } from "@testing-library/react";
import ColorPair from "./ColorPair";

it("has a ColorPair component", () => {
  const { getByText } = render(<ColorPair />);
  expect(getByText("ColorPair")).toBeInTheDocument();
});
