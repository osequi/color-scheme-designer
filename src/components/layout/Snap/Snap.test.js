import React from "react";
import { render } from "@testing-library/react";
import Snap from "./Snap";

it("has a Snap component", () => {
  const { getByText } = render(<Snap />);
  expect(getByText("Snap")).toBeInTheDocument();
});
