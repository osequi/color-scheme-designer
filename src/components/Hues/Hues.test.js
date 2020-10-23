import React from "react";
import { render } from "@testing-library/react";
import Hues from "./Hues";

it("has a Hues component", () => {
  const { getByText } = render(<Hues />);
  expect(getByText("Hues")).toBeInTheDocument();
});
