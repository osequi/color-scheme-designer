import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";

it("has a Nav component", () => {
  const { getByText } = render(<Nav />);
  expect(getByText("Nav")).toBeInTheDocument();
});
