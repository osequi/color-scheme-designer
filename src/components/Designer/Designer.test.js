import React from "react";
import { render } from "@testing-library/react";
import Designer from "./Designer";

it("has a Designer component", () => {
  const { getByText } = render(<Designer />);
  expect(getByText("Designer")).toBeInTheDocument();
});
