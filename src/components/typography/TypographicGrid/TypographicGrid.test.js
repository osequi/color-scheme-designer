import React from "react";
import { render } from "@testing-library/react";
import TypographicGrid from "./TypographicGrid";

it("has a TypographicGrid component", () => {
  const { getByText } = render(<TypographicGrid />);
  expect(getByText("TypographicGrid")).toBeInTheDocument();
});
