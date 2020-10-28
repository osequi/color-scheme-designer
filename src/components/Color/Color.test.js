import React from "react";
import { render } from "@testing-library/react";
import Color from "./Color";

it("has a Color component", () => {
  const { getByText } = render(<Color />);
  expect(getByText("Color")).toBeInTheDocument();
});
