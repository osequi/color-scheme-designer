import React from "react";
import { render } from "@testing-library/react";
import ColorTints from "./ColorTints";

it("has a ColorTints component", () => {
  const { getByText } = render(<ColorTints />);
  expect(getByText("ColorTints")).toBeInTheDocument();
});
