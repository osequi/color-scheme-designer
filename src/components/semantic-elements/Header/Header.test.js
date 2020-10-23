import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("has a Header component", () => {
  const { getByText } = render(<Header />);
  expect(getByText("Header")).toBeInTheDocument();
});
