import React from "react";
import { render } from "@testing-library/react";
import ColorInfo from "./ColorInfo";

it("has a ColorInfo component", () => {
  const { getByText } = render(<ColorInfo />);
  expect(getByText("ColorInfo")).toBeInTheDocument();
});
