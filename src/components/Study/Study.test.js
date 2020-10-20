import React from "react";
import { render } from "@testing-library/react";
import Study from "./Study";

it("has a Study component", () => {
  const { getByText } = render(<Study />);
  expect(getByText("Study")).toBeInTheDocument();
});
