import React from "react";
import { render } from "@testing-library/react";
import H5 from "./H5";

it("has a H5 component", () => {
  const { getByText } = render(<H5 />);
  expect(getByText("H5")).toBeInTheDocument();
});
