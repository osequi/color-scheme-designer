import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

it("has a Cell component", () => {
  const { getByText } = render(<Cell />);
  expect(getByText("Cell")).toBeInTheDocument();
});
