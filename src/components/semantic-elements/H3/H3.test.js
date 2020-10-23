import React from "react";
import { render } from "@testing-library/react";
import H3 from "./H3";

it("has a H3 component", () => {
  const { getByText } = render(<H3 />);
  expect(getByText("H3")).toBeInTheDocument();
});
