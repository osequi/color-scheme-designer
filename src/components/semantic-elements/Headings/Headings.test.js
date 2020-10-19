import React from "react";
import { render } from "@testing-library/react";
import Headings from "./Headings";

it("has a Headings component", () => {
  const { getByText } = render(<Headings />);
  expect(getByText("Headings")).toBeInTheDocument();
});
