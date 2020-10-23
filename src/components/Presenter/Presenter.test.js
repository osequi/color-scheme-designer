import React from "react";
import { render } from "@testing-library/react";
import Presenter from "./Presenter";

it("has a Presenter component", () => {
  const { getByText } = render(<Presenter />);
  expect(getByText("Presenter")).toBeInTheDocument();
});
