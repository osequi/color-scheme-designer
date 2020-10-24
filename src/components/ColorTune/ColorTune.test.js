import React from "react";
import { render } from "@testing-library/react";
import ColorTune from "./ColorTune";

it("has a ColorTune component", () => {
  const { getByText } = render(<ColorTune />);
  expect(getByText("ColorTune")).toBeInTheDocument();
});
