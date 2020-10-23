import React from "react";
import { render } from "@testing-library/react";
import H1 from "./H1";

it("has a H1 component", () => {
  const { getByText } = render(<H1 />);
  expect(getByText("H1")).toBeInTheDocument();
});
