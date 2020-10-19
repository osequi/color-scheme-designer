import React from "react";
import { render } from "@testing-library/react";
import H6 from "./H6";

it("has a H6 component", () => {
  const { getByText } = render(<H6 />);
  expect(getByText("H6")).toBeInTheDocument();
});
