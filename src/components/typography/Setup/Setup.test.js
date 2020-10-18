import React from "react";
import { render } from "@testing-library/react";
import Setup from "./Setup";

it("has a Setup component", () => {
  const { getByText } = render(<Setup />);
  expect(getByText("Setup")).toBeInTheDocument();
});
