import React from "react";
import { render } from "@testing-library/react";
import Add from "./Add";

it("has a Add component", () => {
  const { getByText } = render(<Add />);
  expect(getByText("Add")).toBeInTheDocument();
});
