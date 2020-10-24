import React from "react";
import { render } from "@testing-library/react";
import ColorTint from "./ColorTint";

it("has a ColorTint component", () => {
  const { getByText } = render(<ColorTint />);
  expect(getByText("ColorTint")).toBeInTheDocument();
});
