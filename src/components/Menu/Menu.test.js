import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";

it("has a Menu component", () => {
  const { getByText } = render(<Menu />);
  expect(getByText("Menu")).toBeInTheDocument();
});
