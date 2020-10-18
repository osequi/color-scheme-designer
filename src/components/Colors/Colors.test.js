import React from "react";
import { render } from "@testing-library/react";
import Colors from "./Colors";

it("has a Colors component", () => {
  const { getByText } = render(<Colors />);
  expect(getByText("Colors")).toBeInTheDocument();
});
