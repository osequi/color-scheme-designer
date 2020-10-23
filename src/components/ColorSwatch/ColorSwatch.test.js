import React from "react";
import { render } from "@testing-library/react";
import ColorSwatch from "./ColorSwatch";

it("has a ColorSwatch component", () => {
  const { getByText } = render(<ColorSwatch />);
  expect(getByText("ColorSwatch")).toBeInTheDocument();
});
