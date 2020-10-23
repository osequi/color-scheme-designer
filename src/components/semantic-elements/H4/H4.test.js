import React from "react";
import { render } from "@testing-library/react";
import H4 from "./H4";

it("has a H4 component", () => {
  const { getByText } = render(<H4 />);
  expect(getByText("H4")).toBeInTheDocument();
});
