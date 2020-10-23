import React from "react";
import { render } from "@testing-library/react";
import H2 from "./H2";

it("has a H2 component", () => {
  const { getByText } = render(<H2 />);
  expect(getByText("H2")).toBeInTheDocument();
});
