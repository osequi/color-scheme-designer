import React from "react";
import { render } from "@testing-library/react";
import ColorModels from "./ColorModels";

it("has a ColorModels component", () => {
  const { getByText } = render(<ColorModels />);
  expect(getByText("ColorModels")).toBeInTheDocument();
});
