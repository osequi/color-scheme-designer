import React from "react";
import { render } from "@testing-library/react";
import Swatches from "./Swatches";

it("has a Swatches component", () => {
  const { getByText } = render(<Swatches />);
  expect(getByText("Swatches")).toBeInTheDocument();
});
