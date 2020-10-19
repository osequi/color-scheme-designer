import React from "react";
import { render } from "@testing-library/react";
import Aside from "./Aside";

it("has a Aside component", () => {
  const { getByText } = render(<Aside />);
  expect(getByText("Aside")).toBeInTheDocument();
});
