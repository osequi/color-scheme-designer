import React from "react";
import { render } from "@testing-library/react";
import Swatch from "./Swatch";

it("has a Swatch component", () => {
  const { getByText } = render(<Swatch />);
  expect(getByText("Swatch")).toBeInTheDocument();
});
